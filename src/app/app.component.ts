import { Component } from '@angular/core';
export type Edit = 'first' | 'second'|'third';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  editor: Edit = 'first';

  get showNameEditor() {
    return this.editor == 'first'; 
  }

  get showProfileEditor() {
    return this.editor == 'second';
  }
  get showthirdEditor() {
    return this.editor == 'third';
  }

  toggleEditor(type) {
    this.editor = type;
  }


  
}