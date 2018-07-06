import { Observable } from 'rxjs/Observable';
import { BookStore } from './../core/BookStore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private GET_BOOK_API = '../../assets/books.json';
  public bookStore = new BookStore(undefined);
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.GET_BOOK_API)
    .do(data => {
      // update the the book store
      this.bookStore.update(data);
    });
  }
}
