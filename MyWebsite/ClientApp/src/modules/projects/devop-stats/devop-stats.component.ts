import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../../core/meta-data.service";

@Component({
  selector: 'app-devop-stats',
  templateUrl: './devop-stats.component.html'
})
export class DevOpStatsComponent extends MetaDataService implements OnInit {

  ngOnInit() {
    this.updateTags('DevOp Stats', 'projects/devop-stats');
  }
}
