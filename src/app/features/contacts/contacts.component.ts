import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {

  contactUsers = [
    { id: 1, name: 'Fabio', gender: 'M' },
    { id: 2, name: 'Lisa', gender: 'F' },
    { id: 3, name: 'Lorenzo', gender: 'M' },
    { id: 4, name: 'Silvia', gender: 'F' }
  ];
}
