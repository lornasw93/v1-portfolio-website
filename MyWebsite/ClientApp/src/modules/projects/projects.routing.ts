import { Routes } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { CsvToMapComponent } from "./csv-to-map/csv-to-map.component";
import { EpilepsyDiaryComponent } from "./epilepsy-diary/epilepsy-diary.component";
import { DevOpStatsComponent } from "./devop-stats/devop-stats.component";
import { MikesFlooringComponent } from "./mikes-flooring/mikes-flooring.component";

export const PROJECT_ROUTES: Routes = [
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'devop-stats', component: DevOpStatsComponent
  },
  {
    path: 'csv-to-map', component: CsvToMapComponent
  },
  {
    path: 'epilepsy-diary', component: EpilepsyDiaryComponent
  },
  {
    path: 'mikes-flooring', component: MikesFlooringComponent
  }
];
