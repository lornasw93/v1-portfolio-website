import { Component, OnInit } from '@angular/core';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from "../../core/meta-data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent extends MetaDataService implements OnInit {
  faShareSquare = faShareSquare;

  ngOnInit() {
    this.updateTags('About', 'about');
  }
}
