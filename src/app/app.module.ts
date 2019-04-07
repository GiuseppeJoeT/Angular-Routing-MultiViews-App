// import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';
import { UserService } from './core/services/user.service';
import { FormValidationComponent } from './features/form-validation/form-validation.component';
import { CardComponent } from './shared/card/card.component';
import { CollapsPanelComponent } from './shared/collaps-panel/collaps-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ContactsComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailsComponent,
    FormValidationComponent,
    CardComponent,
    CollapsPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2CarouselamosModule
    // app routing alternative
    // RouterModule.forRoot([
    //   { path: 'catalog', component: CatalogComponent },
    //   { path: 'contacts', component: ContactsComponent },
      //  error { path: '', component: AppComponent },
      // { path: '**', redirectTo: 'home'}
    // ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
