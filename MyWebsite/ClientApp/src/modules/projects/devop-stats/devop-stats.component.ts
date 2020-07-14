import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-devop-stats',
  templateUrl: './devop-stats.component.html'
})
export class DevOpStatsComponent extends MetaDataService implements OnInit {
  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('DevOp Stats', 'projects/devop-stats');
  }
}
