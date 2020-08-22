import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseApiService<object> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getPosts() {
    return this.getList('posts/lornasw93');
  }

  getPostCount() {
    return this.count('posts/count/lornasw93');
  }
}
