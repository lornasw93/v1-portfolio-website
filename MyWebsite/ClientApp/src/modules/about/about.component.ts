import { Component, OnInit } from '@angular/core';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { MetaDataService } from '../../core/services/meta-data.service';

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
