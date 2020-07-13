import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }
}
