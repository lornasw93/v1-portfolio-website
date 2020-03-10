import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
    }
    
    contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required],
    });

    onSubmit() {
      alert(this.contactForm.value);
    }
}
