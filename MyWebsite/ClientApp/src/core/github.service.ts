import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class GitHubService extends BaseApiService<object> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getRepos() {
    return this.getList('repos/lornasw93');
  }

  getReadme() {
    return this.get('repo/readme/:name');
  }
   
  getProjectCount() {
    return this.count('repos/count/lornasw93');
  }
}
