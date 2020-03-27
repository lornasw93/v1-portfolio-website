import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  onSubmit() {
    var model = {
      subject: 'Contact Form Submission for lornasw.co',
      from: 'noreply@lornasw.co',
      body: 'Hi Lorna, \n\n' + this.contactForm.value
    };

    this.httpClient.post('https://c80716a3-7580-4188-bcca-709ba03ab0b8.comms.lornasw.co/api/email/', model).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    ); 
  }
}
