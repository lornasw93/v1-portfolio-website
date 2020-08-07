import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService extends BaseApiService<object> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  sendEmail(params) {
    return this.post(params, 'email/my-website/contact');
  }
}
