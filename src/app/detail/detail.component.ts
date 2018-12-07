import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  bookList: Book[] = [];
  title: string;
  name: string;
  index: number = 100;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookList = this.bookService.getBookList();
  }

  update() {
    if(this.title != null && this.name != null)
    {
      this.bookList.push(new Book("" + this.index, this.title, this.name));
      this.index++;
    }
  }

}
