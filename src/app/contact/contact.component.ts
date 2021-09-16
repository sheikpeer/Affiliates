import { Component, Input, OnInit } from '@angular/core';
import { contact } from '../model/contact';
import { contactservices } from '../service/contact.service';
import {
  ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators,
  FormBuilder
} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

@Input() hero: any

  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
  msg: FormControl = new FormControl("", [Validators.required]);
  submitted: boolean = false;
  isLoading: boolean = false;
  data: any;
  editId :any;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private contactservices: contactservices) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      msg: this.msg,

    });

    this.editId = this.route.snapshot.params['id'];
    console.log("dfsa",this.editId);
    if(this.editId){
      this.contactservices.getById(this.editId).subscribe((data: any) => {
      this.form.patchValue(data)
      })

    }
  }

  ngOnInit(): void {
    this.onSubmit();
    console.log(this.hero);
    this.toastr.success('success');

    
  }


  onSubmit() {
    if (this.form.status == "VALID") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.get('name')?.value)
      formData.append("email", this.form.get('email')?.value);
      formData.append("msg", this.form.get('msg')?.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      const data = {
        email: this.email.value,
        name: this.name.value,
        msg: this.msg.value
      }


      this.contactservices.contactAdd(data).subscribe((data) => {
        if (data == "success") {
          this.data = "Thanks for the message! I'll get back to you soon!";
        } else {
          this.data = "Oops! Something went wrong... Reload the page and try again.";
        }
        this.form.enable(); // re enable the form after a success
        this.submitted = true; // show the response message
        this.isLoading = false; // re enable the submit button
        console.log(data);
        this.toastr.success(this.data);
      }, (err) => {
        this.data = "Oops! Something went wrong... Reload the page and try again.";
      })

    }
  }
}






