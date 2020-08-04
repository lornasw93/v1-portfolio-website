import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class EmailService extends BaseApiService<object> {
  resourceUrl = 'contactEmail';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  send(params) {
    return this.post(params);
  }
}
