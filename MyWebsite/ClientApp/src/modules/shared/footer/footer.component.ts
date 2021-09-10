import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAt } from '@fortawesome/free-solid-svg-icons';

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
  faAngleUp = faAngleUp;

  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
