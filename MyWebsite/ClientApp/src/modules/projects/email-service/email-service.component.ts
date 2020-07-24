import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser";
import { faGithubAlt, faDev } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-email-service',
  templateUrl: './email-service.component.html'
})
export class EmailServiceComponent extends MetaDataService implements OnInit {
  faGithubAlt = faGithubAlt;
  faDev = faDev;

  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('Email Service', 'projects/email-service');
  }
}
