import { Component, OnInit } from '@angular/core';
import { faHome, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { BaseApiService } from "../../../core/base.api.service";
import { HttpClient } from "@angular/common/http";
import { BlogService } from "../../../core/blog.service";

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
    private blogService: BlogService) {
    super(httpClient);
  }

  postCount: number;

  ngOnInit() {
    //this.postCount = this.blogService.getCount();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
