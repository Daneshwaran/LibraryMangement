import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BooksService } from '../books.service';
import _ from "lodash";
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private bookService: BooksService) { }
  existingRentedBooks = [];
  existingRentedBooksIDs
  checked = [];
  selectedBooks = [];
  ngOnInit() {
    this.firestore.collection("Rent").doc("me").get()
      .subscribe(o => {
        o.data().Books.map(o => {
          this.bookService.getBooksByID(o)
          .subscribe(o => {
            this.existingRentedBooks.push(o)
            console.log(this.existingRentedBooks)
          })
        }
        );
      }
      )
    // console.log(this.existingRentedBooks)
  }
  selectBooks(event, book, i) {
    this.checked[i] = !this.checked[i]
    this.selectedBooks = this.existingRentedBooks.filter((data, index) => {
      if (this.checked[index])
        return data
    })
    console.log(this.selectedBooks)
  }
  return() {
    this.existingRentedBooksIDs = _.difference(this.existingRentedBooks.map(o => o.id), this.selectedBooks.map(o => o.id))
    this.existingRentedBooks = this.existingRentedBooks.filter(
      o =>{
      if (_.indexOf(this.existingRentedBooksIDs, o.id) >= 0)
        return o
      }
    )
    this.firestore.collection("Rent").doc("me").update(
      {
        user: "daneshwaran",
        Books: this.existingRentedBooksIDs
      }
    );
  }
}
