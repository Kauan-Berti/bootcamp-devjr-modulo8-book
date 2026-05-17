import { Component } from '@angular/core';
import { Book } from '../../Book';
import { CommonModule } from '@angular/common';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-books',
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {

  book: Book = {} as Book;
  isUpdate: boolean = false;
  idCounter: number = 5;

  books: Book[] = [
    {
      id: 1,
      title: 'Dom Casmurro',
      author: 'Machado de Assis',
      price: 50.00
    },
    {
      id: 2,
      title: 'O Alienista',
      author: 'Machado de Assis',
      price: 40.00
    },
    {
      id: 3,
      title: 'A Moreninha',
      author: 'Joaquim Manuel de Macedo',
      price: 35.00
    },
    {
      id: 4,
      title: 'Memórias de um Sargento de Milícias',
      author: 'Machado de Assis',
      price: 45.00
    }
  ];

  saveBook() {
    if (!this.isUpdate) {
      this.book.id = this.idCounter;
      this.idCounter++;
      this.books.push(this.book);
    }

    this.book = {} as Book;
    this.isUpdate = false;
  }


  update(selectedBook: Book) {
    this.book = selectedBook;
    this.isUpdate = true;
  }

  remove(removeBook: Book) {
    this.books = this.books.filter(b => b !== removeBook);
  }

}
