import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { MetaDataService } from 'src/core/meta-data.service';
import { Title, Meta } from '@angular/platform-browser';
import { Spinkit } from 'ng-http-loader';

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

  public spinkit = Spinkit; 

  ngOnInit() {
    this.updateTags(null, null);

    AOS.init();
  }
}
