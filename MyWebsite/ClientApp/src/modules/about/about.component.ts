import { Component, OnInit } from '@angular/core';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  faShareSquare = faShareSquare;

  ngOnInit() {
  }
}
