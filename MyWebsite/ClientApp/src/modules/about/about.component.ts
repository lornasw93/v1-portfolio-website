import { Component, OnInit } from '@angular/core';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from "../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent extends MetaDataService implements OnInit {
  faShareSquare = faShareSquare;

  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('About', 'about');
  }
}
