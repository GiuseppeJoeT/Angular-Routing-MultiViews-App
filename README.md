# MultiViewAngularRouter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--------------------------------------------------

# Ng2Carouselamos

Ng2-carouselamos is a simple carousel/slider which just use css transitions to do the work

### Demo
![Demo](http://ng-raw-multi-views.surge.sh/)

### Getting started
- Install node package:
```
npm i ng2-carouselamos --save
```

And then, in your app.module.ts :
```
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
...
@NgModule({
  ...
  imports: [
    ...
    Ng2CarouselamosModule
  ],
  ...
})
```

### Documentation
  ```ng2-carouselamos``` - attribute to apply carousel

  ```width``` - size of window to show

  ```items``` - objects array that belong to the carousel

  ```$item``` - template for each item

  ```$prev``` - template for previous button

  ```$next``` - template for next button

  ```onSelectedItem($event)``` - event triggered when snap element. $event is an object containing the current item and the current index - { item: ..., index: ... }


  Inside ```$item``` template we have access to the follow:

  * ```let-item``` - the current element of the objects array

  * ```let-i="index"``` - current index


### Implementing
```html
<div
  ng2-carouselamos
  [width]="500"
  [items]="listOfItems"
  [$item]="itemTemplate"
  [$prev]="prevTemplate"
  [$next]="nextTemplate"
  (onSelectedItem)="selectedItem = $event.item; selectedIndex = $event.index"
></div>

<div>
  Current item selected
</div>

<ng-template #prevTemplate>
  <img src="prev.png" />
</ng-template>

<ng-template #nextTemplate>
  <img src="next.png" />
</ng-template>

<ng-template let-item let-i="index" #itemTemplate>
  <div style="min-width: 200px">
    <b *ngIf="i === selectedIndex">{{i}}. {{item.name}}</b>
    <span *ngIf="i !== selectedIndex">{{i}}. {{item.name}}</span>
  </div>
</ng-template>
```

Based on https://github.com/trekhleb/angular-library-seed
