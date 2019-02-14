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

  constructor( ) {
    // Carousel
    this.items = [
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaffolder_logo.jpg' },
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaffolder_logo.jpg' }
    ];
  }

  users = [];

  // Input, Template reference variable,
  add(inputName: HTMLInputElement, inputAge: HTMLInputElement, inputCity: HTMLInputElement) {
    // inviare all'array nuovo valore
    this.users.push({
      name: inputName.value,
      age: inputAge.value,
      city: inputCity.value
    });

    // pulire campo input dopo invio
    inputName.value = '';
    inputAge.value = '';
    inputCity.value = '';

    // focus su input dopo click bottone
    inputName.focus();
  }



}
