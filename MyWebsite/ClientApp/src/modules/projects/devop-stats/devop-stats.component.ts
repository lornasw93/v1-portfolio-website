import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';

@Component({
  selector: 'app-devop-stats',
  templateUrl: './devop-stats.component.html'
})
export class DevOpStatsComponent extends ProjectBaseService implements OnInit {
  projectName = 'devop stats';
  statusPercent = 80;
  websiteUrl = 'https://devopstats.co';
  githubUrl = 'https://github.com/lornasw93/devopstats';
  tags = ['Azure DevOps', '.NET Core', 'Angular', 'Swagger', 'REST API'];
 
  constructor() {
    super();
  }

  ngOnInit() { }
}
