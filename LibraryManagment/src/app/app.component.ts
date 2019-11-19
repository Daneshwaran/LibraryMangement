import { Component } from '@angular/core';
import { BooksService } from './books.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LibraryManagment';
  query = new FormControl('');
  selections = []
  constructor(private BooksService: BooksService) { }
  books = {};
  ngOnInit(): void {
    this.getBooks()
  }
  View = "Available Books"
  public changeView(view) {
    this.View = view
  }
  refreshView(selected){
    if(selected){
      this.View = selected;
    }
  }
  getBooks() {
    this.BooksService.getBooks(this.query.value).subscribe(
      (value) => this.books = value
      )
    }
    refreshSelection(selected){
      if(selected){
        this.selections = selected;
      }
  }
}
