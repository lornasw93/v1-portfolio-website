import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  faChevronCircleRight = faChevronCircleRight;

  constructor() { }

  ngOnInit() { }
}
