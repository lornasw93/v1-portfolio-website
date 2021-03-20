import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../../core/services/api.service';
import { BaseApiService } from '../../../core/services/base.api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent extends BaseApiService<object> implements OnInit {
  faHome = faHome;
  faDev = faDev;
  faBars = faBars;

  navbarOpen = false;

  isRepoCountLoading: boolean;
  isPostCountLoading: boolean;
  postCount: number;
  repoCount: number;

  constructor(httpClient: HttpClient,
    private service: ApiService) {
    super(httpClient);
  }

  ngOnInit() {
    this.getPostCount();
    this.getProjectCount();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  getPostCount() {
    this.isPostCountLoading = true;

    this.service.getPostCount().subscribe((res: any) => {
      this.postCount = res.count;
    }).add(() => {
      this.isPostCountLoading = false;
    });
  }

  getProjectCount() {
    this.isRepoCountLoading = true;

    this.service.getProjectCount().subscribe((res: any) => {
      this.repoCount = res.count;
    }).add(() => {
      this.isRepoCountLoading = false;
    });
  }
}
