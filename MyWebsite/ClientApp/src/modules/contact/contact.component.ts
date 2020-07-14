import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from "../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent extends MetaDataService implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  //constructor(
  //  private fb: FormBuilder,
  //  private httpClient: HttpClient
  //) { }

  //contactForm = this.fb.group({
  //  name: ['', Validators.required],
  //  email: ['', Validators.required],
  //  message: ['', Validators.required],
  //});

  ngOnInit() {
    this.updateTags('Contact', 'contact');
  }

  onSubmit() {
    alert('todo');

    //var model = {
    //  subject: 'Contact Form Submission from lorna.dev',
    //  from: 'noreply@lorna.dev',
    //  body: 'Hi Lorna, \n\n' + this.contactForm.value
    //};

    //this.httpClient.post('https://c80716a3-7580-4188-bcca-709ba03ab0b8.comms.lorna.dev/api/email/', model).subscribe(
    //    (response) => console.log(response),
    //    (error) => console.log(error)
    //); 
  }
}
