import { Component, OnInit } from '@angular/core';
import { faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';
import { MetaDataService } from 'src/core/meta-data.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html'
})
export class DeskComponent extends MetaDataService implements OnInit {
  faAmazon = faAmazon;
  faEbay = faEbay;

  constructor(  titleService: Title,
      metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('Desk', 'desk');
  }
}
