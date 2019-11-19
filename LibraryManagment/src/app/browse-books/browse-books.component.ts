import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../books.service'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss']
})
export class BrowseBooksComponent implements OnInit {
  @Output() selections = new EventEmitter();
  query = new FormControl('');
  constructor(private BooksService: BooksService) {
    
   }
  books = {};
  selectedBooks = [];
  checked = [];
  searchField = new FormControl('');
  ngOnInit(): void {
    this.getBooks('')
    this.searchField.valueChanges.subscribe(o=> this.getBooks(o))
  }
  getBooks(query) {
    this.BooksService.getBooks(query).subscribe(
      (value) => this.books = value
    )
    this.checked = new Array(10);
    this.checked.fill(false);
  }
  selectBooks(event, book, i) {
    this.checked[i] = !this.checked[i]
    console.log(this.checked)
    
    this.selectedBooks = this.books["items"].filter((data, index) => {
      if (this.checked[index])
      return data
    })
    this.selections.emit(this.selectedBooks )
  }

}
