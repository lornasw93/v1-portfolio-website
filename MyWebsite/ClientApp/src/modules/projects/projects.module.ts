import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { EpilepsyDiaryComponent } from './epilepsy-diary/epilepsy-diary.component';
import { RouterModule } from '@angular/router';
import { DevOpStatsComponent } from './devop-stats/devop-stats.component';
import { PROJECT_ROUTES } from './projects.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectStatusComponent } from '../shared/project-status/project-status.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    EpilepsyDiaryComponent,
    DevOpStatsComponent,
    ProjectStatusComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterModule.forChild(PROJECT_ROUTES)
  ],
  exports: [RouterModule]
})
export class ProjectsModule { }
