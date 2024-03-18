import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: String[] = ['Estudar Angular'];
  newItem: String = ''

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}

