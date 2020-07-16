import { Component, OnInit } from '@angular/core';
import { faHome, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faDev = faDev;
  faDownload = faDownload;
  faBars = faBars;

  constructor() { }

  ngOnInit() { }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
