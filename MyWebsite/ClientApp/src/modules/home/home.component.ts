import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit() { }
}

