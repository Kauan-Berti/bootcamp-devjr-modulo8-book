import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { BookComponent } from "./components/book/book.component";
import { BooksComponent } from "./components/books/books.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BookComponent, BooksComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
