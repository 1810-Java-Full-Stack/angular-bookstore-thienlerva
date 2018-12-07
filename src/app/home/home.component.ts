import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookList = this.bookService.getBookList();
  }

  

}
