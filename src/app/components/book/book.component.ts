import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Book } from "../../Book";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {

  @Input()
  book: Book = {} as Book;

  @Output()
  saveEmitter = new EventEmitter();

  save(){
    this.saveEmitter.emit();
  }
}
