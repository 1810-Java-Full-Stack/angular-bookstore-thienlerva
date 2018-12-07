import { Injectable } from '@angular/core';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  authorList: Author[] = [];

  constructor() {
    this.addDummyData();
   }

  addDummyData() {
    this.authorList.push(new Author("William", "100", "History favorite"));
    this.authorList.push(new Author("Jack", "101", "Drama favorite"));
    this.authorList.push(new Author("Anthony", "102", "Horror favorite"));
    this.authorList.push(new Author("Jennifer", "103", "Literature favorite"));
  }

  public getAuthorList(): Author[] {

    return this.authorList;
  }

  public getAuthorDetail(id: string): Author {

    for (const a of this.authorList) {
      if (a.getAuthorId() == id) {
        return a;
      }
    }

    return null;
  }


}
