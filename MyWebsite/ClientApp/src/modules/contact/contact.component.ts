import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(private fb: FormBuilder,
    public httpClient: HttpClient,
    private service: ApiService
  ) {
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required], //TODO email format
    message: ['', Validators.required],
  });

  ngOnInit() {
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
        Swal.fire('Oops!', 'Something has gone wrong, please send your request via email to hello@lorna.dev.', 'error');
      }
    );
  };
}
