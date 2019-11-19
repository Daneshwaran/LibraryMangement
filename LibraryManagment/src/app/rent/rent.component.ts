import { Component, OnInit, Inject, Input, EventEmitter } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AngularFirestore } from '@angular/fire/firestore';
import _ from "lodash";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }
  @Input() selections = [];
  existingRentedBooks = [];
  returnDate;
  rent = new FormGroup({
    memberNo: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.firestore.collection("Rent").doc("me").get()
      .subscribe(o => this.existingRentedBooks = o.data().Books)
    this.rent.controls.duration.valueChanges.subscribe(o => {
      if (o != '')
        this.returnDate = moment().add(o, 'days').format("MMM Do YY")
      else
        this.returnDate = '';
    }
    )
  }
  saveToFireStore() {
    this.firestore.collection("Rent").doc("me").get()
      .subscribe(o => o.data())

    this.firestore.collection("Rent").doc("me").update(
      {
        user: "daneshwaran",
        Books: _.uniq(
          _.concat(
            this.existingRentedBooks, this.selections.map(o => o.id)
          ))
      }
    );

  }
}
