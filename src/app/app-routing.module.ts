import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';
import { FormValidationComponent } from './features/form-validation/form-validation.component';


const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'form-validation', component: FormValidationComponent},
  { path: 'styling', component: ContactsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  // {path: 'home', component: AppComponent }, error
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
