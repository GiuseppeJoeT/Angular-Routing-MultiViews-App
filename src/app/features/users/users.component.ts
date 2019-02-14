import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // we shoud create a users interface then
  users: User[];

  constructor(http: HttpClient) {
    setTimeout(() => {
      // attraverso HttpClient possiamo accedere ai metodi: GET, POST, PUT, PATCH, DELETE
      http.get<any[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(result => this.users = result);

    }, 2500);
  }

}
