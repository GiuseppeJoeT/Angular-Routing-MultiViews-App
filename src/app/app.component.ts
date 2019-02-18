import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MultiView-AngularRouter';

  // Carousel
  items: Array<any> = [];

  constructor( ) {
    // Carousel
    this.items = [
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaffolder_logo.jpg' },
      { name: 'assets/images/con-te-logo.svg' },
      { name: 'assets/images/Oracle_logo.png' },
      { name: 'assets/images/skaffolder_logo.jpg' }
    ];
  }


}
