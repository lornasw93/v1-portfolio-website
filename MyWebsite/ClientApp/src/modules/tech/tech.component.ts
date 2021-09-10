import { Component, OnInit } from '@angular/core';
import { faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html'
})
export class TechComponent implements OnInit {   
  faShare = faShare;

  ngOnInit() {
  }
}
