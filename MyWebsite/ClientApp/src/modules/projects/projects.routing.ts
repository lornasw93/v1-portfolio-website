import { Routes } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { CsvToMapComponent } from "./csv-to-map/csv-to-map.component";
import { CommsServiceComponent } from "./comms-service/comms-service.component";
import { EpilepsyDiaryComponent } from "./epilepsy-diary/epilepsy-diary.component";
import { DevOpStatsComponent } from "./devop-stats/devop-stats.component";
import { MikesFlooringComponent } from "./mikes-flooring/mikes-flooring.component";

export const PROJECT_ROUTES: Routes = [
  {
    path: 'projects', component: ProjectsComponent,
    data: {
      title: 'Projects | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'devop-stats', component: DevOpStatsComponent,
    data: {
      title: 'DevOp Stats | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'csv-to-map', component: CsvToMapComponent,
    data: {
      title: 'CSV to Map | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'comms-service', component: CommsServiceComponent,
    data: {
      title: 'Comms Service | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'epilepsy-diary', component: EpilepsyDiaryComponent,
    data: {
      title: 'Epilepsy Diary | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'mikes-flooring', component: MikesFlooringComponent,
    data: {
      title: 'Mike\'s Flooring',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  }
];
