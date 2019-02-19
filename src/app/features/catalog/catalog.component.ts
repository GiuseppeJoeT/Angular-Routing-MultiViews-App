import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  // 1way vs 2 way binding
  label = 'Username';

  constructor() {
    setTimeout(() => {
      this.label = '(minimo 3 caratteri)';
    }, 2000);
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
