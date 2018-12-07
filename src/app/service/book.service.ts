import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: Book[] = [];

  constructor() { 
    this.addDummyData();
  }

  addDummyData() {
    this.bookList.push(new Book("1000", "Harry Potter", "William"));
    this.bookList.push(new Book("1111", "Gone with the wind", "Jack"));
    this.bookList.push(new Book("2222", "Horror favorite", "Anthony"));
    this.bookList.push(new Book("3333", "Literature favorite", "Jennifer"));
  }

  public getBookList(): Book[] {
    return this.bookList;
  }

  public getBookDetail(id: string): Book {

    for (const a of this.bookList) {
      if (a.getBookId() == id) {
        return a;
      }
    }

    return null;
  }

}
