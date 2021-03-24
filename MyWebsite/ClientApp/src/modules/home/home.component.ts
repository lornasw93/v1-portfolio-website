import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from '../../core/services/meta-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends MetaDataService implements OnInit {
  faAngleDown = faAngleDown;

  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags(null, null);
  }
}
