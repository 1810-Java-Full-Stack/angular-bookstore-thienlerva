import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../service/bookstore.service';
import { Author } from '../models/author';
import { NgModel } from '@angular/forms';
import { BookService } from '../service/book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit {

  bookList: Book[];
  currentBook: Book;
  authorList: Author[];
  id : string;
  currentAuthor: Author;
  output: string;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {

    this.bookList = this.bookService.getBookList();
  }

  public getBookById(): Book {
    
    return this.currentBook = this.bookService.getBookDetail(this.id);
  
  }

  // getAuthor() {
  //   this.currentAuthor = this.bookstoreService.getAuthorDetail(this.authorid);
  //   if (this.currentAuthor == null || this.currentAuthor == undefined) {
  //     this.output = 'sorry, invalid id';
  //   } else {
  //     this.output = `welcome ${this.currentAuthor.getAuthorName()}`;
  //   }
    
  // }


}
