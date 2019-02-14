import { Component } from '@angular/core';
import { User } from '../../model/user.interface'

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

  // ngForm, ngModel e gestione data model
  utente: User;

  utenti = [
    { name: 'Joe', age: 32, city: 'Rome' }
  ];

  add(form) {
    // console.log(form.value);
    this.utenti.push(form.value);
  }

  setActive(utente: User) {
    this.utente = utente;
  }

}
