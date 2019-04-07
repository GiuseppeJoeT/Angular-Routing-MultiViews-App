import { Router, NavigationEnd } from '@angular/router';
import { Component, Input } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MultiView-AngularRouter';

  @Input() username = 'Joe';

  // Carousel
  items: Array<any> = [];

  // Router Events log + RxJs operators
  constructor( router: Router ) {
    router.events
      // .pipe() è un metodo speciale
      .pipe(
        // operatore .filter()
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // log fasi ciclo di vita Router
        console.log(event.url);
      });

    // Carousel
    this.items = [
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaffolder_logo.jpg' },
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaffolder_logo.jpg' }
    ];
  } // chiudi constructor


}
