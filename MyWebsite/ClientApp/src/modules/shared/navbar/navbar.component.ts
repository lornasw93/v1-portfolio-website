import { Component, OnInit } from '@angular/core';
import { faHome, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { BaseApiService } from "../../../core/base.api.service";
import { HttpClient } from "@angular/common/http";
import { BlogService } from "../../../core/blog.service";
import { GitHubService } from "../../../core/github.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent extends BaseApiService<object> implements OnInit {
  resourceUrl: 'posts/count';

  faHome = faHome;
  faDev = faDev;
  faDownload = faDownload;
  faBars = faBars;

  navbarOpen = false;

  constructor(httpClient: HttpClient,
    private blogService: BlogService,
    private githubService: GitHubService) {
    super(httpClient);
  }

  postCount: number;
  repoCount: number;

  ngOnInit() {
    this.getPostCount();
    this.getProjectCount();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  getPostCount() {
    this.blogService.getPostCount().subscribe(
      (res: any) => {
        this.postCount = res.count;
      },
      err => {
        console.log(err);
      });
  }

  getProjectCount() {
    this.githubService.getProjectCount().subscribe(
      (res: any) => {
        this.repoCount = res.count;
      },
      err => {
        console.log(err);
      });
  }
}
