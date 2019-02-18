import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  testUsers = [
    {'id': 1, 'name': 'Silvia', 'age': 2, 'gender': 'F', city: 'Gorizia'},
    {'id': 2, 'name': 'Fabio', 'age': 40, 'gender': 'M', city: 'Trieste'},
    {'id': 3, 'name': 'Lorenzo', 'age': 6, 'gender': 'M', city: 'Pordenone'},
    {'id': 4, 'name': 'Lisa', 'age': 40, 'gender': 'F', city: 'Gorizia'}
  ];

  constructor() {
  //  let  userMap = testUsers.map
   }
}
