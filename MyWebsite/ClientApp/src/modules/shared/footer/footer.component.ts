import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithubAlt, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  faAt = faAt;
  faLinkedinIn = faLinkedinIn;
  faGithubAlt = faGithubAlt;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
