import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser";
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends MetaDataService implements OnInit {
  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.addInitialTags();

    AOS.init();
  }
}
