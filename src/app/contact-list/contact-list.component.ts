import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { contactservices } from '../service/contact.service';
import {
  ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators,
  FormBuilder
} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactlist: any;
  
  form: any;
  hero=""
  demo=""
  name: any;
  email: any;
  msg :any;
  id: any;
  constructor(private contactservice: contactservices, private http: HttpClient,
     private router: Router, private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getAllContact();
  }
  getAllContact() {
    this.contactservice.getAllContact().subscribe((data: any) => {
      this.contactlist = data;
      console.log(this.contactlist);
    })
  }

  delete(idata: any) {
    this.contactservice.DeleteContact(idata.id).subscribe((data: any) => {
      this.getAllContact();
    })
  }
  private updateUser() {
    // this.contactservice.update(this.id, this.form.value).subscribe((data :any ) => {
    //     console.log('data', data);
        
    //  });
}

  
}

