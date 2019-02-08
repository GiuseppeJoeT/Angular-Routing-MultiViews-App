// import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ContactsComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   { path: 'catalog', component: CatalogComponent },
    //   { path: 'contacts', component: ContactsComponent },
      //  error { path: '', component: AppComponent },
      // { path: '**', redirectTo: 'home'}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }