import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [

  { path: '', component: ContactListComponent }
]; 

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(), 

  ]
})
export class ContactListModule { }
