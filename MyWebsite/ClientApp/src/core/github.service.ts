import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class GitHubService extends BaseApiService<object> {
  resourceUrl = 'repos';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getRepos() {
    return this.getList();
  }
}
