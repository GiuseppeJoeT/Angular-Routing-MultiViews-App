// Custom component
import { Component } from '@angular/core';
import { User } from '../../model/user.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})

export class FormValidationComponent {
  constructor() {}

    // ngForm, ngModel e gestione data model
    utente: User;

    utenti = [
      { name: 'Joe', age: 32, city: 'Rome' }
    ];

    add(form) {
      // console.log(form.value);
      this.utenti.push(form.value);

      // pulire form dopo invio
      form.reset();
    }

    setActive(utente: User) {
      this.utente = utente;
    }

}
