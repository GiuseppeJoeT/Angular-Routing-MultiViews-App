import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // we shoud create a users interface then
  users: any[];

  constructor(http: HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => this.users = res);
  }

  ngOnInit() {
  }

}
