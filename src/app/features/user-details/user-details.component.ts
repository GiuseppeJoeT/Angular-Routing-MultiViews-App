import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user;
  id: number;

  constructor(
    activatedRoute: ActivatedRoute,
    http: HttpClient,
    // Invece di invocare nuova pagina con routerLink="/users", lo faremo tramite API
    // inovando il servizio/classe Router
    // Send the given `HttpRequest` and return a stream of `HttpEvents`
    private router: Router
  ) {
    //  const id = +activatedRoute.snapshot.params['id']; -> casting
    // console.log(activatedRoute.snapshot['id']);
    // la proprietà .params dell'interfaccia  activatedRoute resistuisce un Observable
    activatedRoute.params
      .subscribe(params => {
        // log id user attuale
        console.log(params['id']);
        // +, casting: string to number
        this.id = +params['id'];
          http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
            .subscribe(resp => {
              this.user = resp;
      });
    });
  }

  goToNextUser() {
    // console.log(user);
    // nextId è il prossimo "id" (tipo number)
    const nextId = this.id + 1;
    this.router.navigateByUrl(`users/${nextId}`);
  }

}
