import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {

  contactUsers = [
    { id: 1, name: 'Fabio', gender: 'M', age: 20},
    { id: 2, name: 'Lisa', gender: 'F', age: 30 },
    { id: 3, name: 'Lorenzo', gender: 'M', age: 40 },
    { id: 4, name: 'Silvia', gender: 'F', age: 50 }
  ];

  // usare direttiva [ngClass]
  getFemaleBiggerFont(user) {
    return {
      'female': user.gender === 'F',
      'BiggerFont': true
  };
}

getStyle(user) {
  return {
    color: user.gender === 'M' ? 'blue' : 'pink',
    backgroundColor: '#b3b3ff',
    fontSize: user.age + 'px'
  };
}

} // close ContactsComponent
