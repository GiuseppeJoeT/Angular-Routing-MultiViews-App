import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MultiView-AngularRouter';

  // Carousel
  items: Array<any> = [];

  constructor() {
    // Carousel
    this.items = [
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaff_logo.jpg' },
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaff_logo.jpg' }
    ];
  }

  users = [];

  add(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // inviare all'array nuovo valore
    this.users.push({
      name: inputName.value,
      age: inputAge.value
    });

    // pulire campo input dopo invio
    inputName.value = '';
    inputAge.value = '';

    // focus su input dopo click bottone
    inputName.focus();
  }



}
