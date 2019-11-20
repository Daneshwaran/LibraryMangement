import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
  readonly SEARCH_ROOT_URL = 'https://www.googleapis.com/books/v1/volumes/';
  readonly ROOT_URL1 = 'https://jsonplaceholder.typicode.com/';
  books:any;
  constructor(private http:HttpClient) { }
  public getBooks(query){
    return this.http.get(this.ROOT_URL+ (query == undefined || query == '' ? 'JavaScript' : query) +' &maxResults=40' )
  }
  public getBooksByID(ID){
    return this.http.get(this.SEARCH_ROOT_URL+ ID )
  }


}
