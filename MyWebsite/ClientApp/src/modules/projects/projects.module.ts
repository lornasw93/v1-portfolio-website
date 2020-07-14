import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { EpilepsyDiaryComponent } from './epilepsy-diary/epilepsy-diary.component';
import { CsvToMapComponent } from './csv-to-map/csv-to-map.component';
import { RouterModule } from '@angular/router';
import { DevOpStatsComponent } from './devop-stats/devop-stats.component';
import { PROJECT_ROUTES } from './projects.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './project/project.component';
import { MikesFlooringComponent } from "./mikes-flooring/mikes-flooring.component";

@NgModule({
  declarations: [
    ProjectsComponent,
    CsvToMapComponent,
    EpilepsyDiaryComponent,
    DevOpStatsComponent,
    ProjectComponent,
    MikesFlooringComponent
  ],
  imports: [FontAwesomeModule,
    CommonModule, RouterModule.forChild(PROJECT_ROUTES)],
  exports: [RouterModule]
})
export class ProjectsModule { }
