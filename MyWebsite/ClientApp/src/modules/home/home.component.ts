import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faShareSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  faGlobe = faGlobe;
  faGithub = faGithub;
  faShareSquare = faShareSquare;

  constructor() { }

  ngOnInit() { }
}
