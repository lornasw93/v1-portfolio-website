import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from 'src/core/meta-data.service';
import { Title, Meta } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { EmailService } from "../../core/email.service";

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
    public httpClient: HttpClient,
    private service: EmailService
  ) {
    super(titleService, metaService);
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required], //TODO email format
    message: ['', Validators.required],
  });

  ngOnInit() {
    this.updateTags('Contact', 'contact');
  }

  onSubmit() {
    var data = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.service.sendEmail(data).subscribe(
      res => {
        Swal.fire('Thanks, ' + this.contactForm.value.name + ' 😀', 'Your request has been sent.', 'success');
      },
      err => {
        alert(err);
        Swal.fire('Oops!', 'Something has gone wrong, please send your request via email to hello@lorna.dev.', 'error');
      }
    );
  };
}
