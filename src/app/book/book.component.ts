import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../service/book.service';
import { NgModel } from '@angular/forms';
import { BookstoreService } from '../service/bookstore.service';
import { Author } from '../models/author';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  id: string = "";
  bookList: Book[];
  authorList: Author[];
  currentAuthor: Author;
  currentBook: Book;
  output: string;
  authorId: string;

  constructor(
    private serviceBook: BookService,
    private bookstoreService: BookstoreService
    ) { 

    }

  ngOnInit() {
    this.bookList = this.serviceBook.getBookList();
    this.authorList = this.bookstoreService.getAuthorList();
  }

  public getBook() {

    this.currentBook = this.serviceBook.getBookDetail(this.id);
    if(this.currentBook == null || this.currentBook == undefined) {
     this.output="No book found";
    } else {
      this.output = this.currentBook.getBookTitle();
    }
  
  }

  public getAuthorDetail() {
    this.currentAuthor = this.bookstoreService.getAuthorDetail(this.authorId);
    if(this.currentAuthor == null || this.currentAuthor == undefined) {
      this.output="No author found";
     } else {
       this.output = this.currentAuthor.getAuthorName();
     }

  }


}
