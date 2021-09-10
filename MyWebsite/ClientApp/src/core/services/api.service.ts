import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseApiService<object> {
  constructor(client: HttpClient) {
    super(client);
  }

  getRepos() {
    return this.getList('repos');
  }

  getReadme() {
    return this.get('repo/readme/:name');
  }
   
  getProjectCount() {
    return this.count('repos/count');
  }

  getPosts() {
    return this.getList('posts');
  }

  getPostCount() {
    return this.count('posts/count');
  }

  sendEmail(params) {
    return this.post(params, 'email/contact');
  }
}
