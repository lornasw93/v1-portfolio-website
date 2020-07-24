import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from "../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser";
//import { AngularFireFunctions } from '@angular/fire/functions';
//import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent extends MetaDataService implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(titleService: Title,
    metaService: Meta,
    private fb: FormBuilder,
    //public afAuth: AngularFireAuth,
    //private fun: AngularFireFunctions,
    private httpClient: HttpClient
  ) {
    super(titleService, metaService);
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  result: any;

  ngOnInit() {
    this.updateTags('Contact', 'contact');
  }

  onSubmit() {
    this.httpClient.post<any>(
      'https://us-central1-email-service-4e890.cloudfunctions.net/sendContactFormSubmittedEmail',
      {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
        },
        response => {
          console.error("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
}
