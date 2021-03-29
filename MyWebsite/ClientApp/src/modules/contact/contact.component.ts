import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ApiService } from '../../core/services/api.service';
import { MetaDataService } from '../../core/services/meta-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
//export class ContactComponent extends MetaDataService implements OnInit {
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(titleService: Title,
   // metaService: Meta,
    private fb: FormBuilder,
    public httpClient: HttpClient,
    private service: ApiService
  ) {
    //super(titleService, metaService);
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required], //TODO email format
    message: ['', Validators.required],
  });

  ngOnInit() {
    //this.updateTags('Contact', 'contact');
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
