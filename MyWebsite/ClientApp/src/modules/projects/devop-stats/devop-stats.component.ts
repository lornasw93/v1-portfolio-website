import { Component, OnInit } from '@angular/core';
import { MetaDataService } from 'src/core/meta-data.service';
import { Title, Meta } from '@angular/platform-browser';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-devop-stats',
  templateUrl: './devop-stats.component.html'
})
export class DevOpStatsComponent extends MetaDataService implements OnInit {
  faAngular = faAngular;
  faPercentage = faPercentage;

  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('DevOp Stats', 'projects/devop-stats');
  }
}
