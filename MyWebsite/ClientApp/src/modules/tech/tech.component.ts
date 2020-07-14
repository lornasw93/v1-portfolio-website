import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser/platform-browser";

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html'
})
export class TechComponent extends MetaDataService implements OnInit {
  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('Tech', 'tech');
  }
}
