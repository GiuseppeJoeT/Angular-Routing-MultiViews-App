import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  label = 'Username';

  constructor() {
    setTimeout(() => {
      this.label = '(minimo 3 caratteri)';
    }, 2000);
  }

}
