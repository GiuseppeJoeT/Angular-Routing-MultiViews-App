import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user;

  constructor(
    activatedRoute: ActivatedRoute,
    http: HttpClient
  ) {
     // +, casting: string to number
     const id = +activatedRoute.snapshot.params['id'];
    // console.log(activatedRoute.snapshot['id']);

    http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(res => {
        this.user = res;
        // metttere dentro function

        // servizio chiamata http
        // servizio controllo dati: get().users, set().users, clear().users
      });
  }

  ngOnInit() {
  }

}
