import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-email-service',
  templateUrl: './email-service.component.html'
})
export class EmailServiceComponent extends MetaDataService implements OnInit {
  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('Email Service', 'projects/email-service');
  }
}
