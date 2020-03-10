import { Routes } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";
import { CsvToMapComponent } from "./csv-to-map/csv-to-map.component";
import { CommsServiceComponent } from "./comms-service/comms-service.component";
import { EpilepsyDiaryComponent } from "./epilepsy-diary/epilepsy-diary.component";
import { Umbraco8Component } from "./umbraco8/umbraco8.component";
import { DevOpStatsComponent } from "./devop-stats/devop-stats.component";

export const PROJECT_ROUTES: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'devop-stats', component: DevOpStatsComponent },
    { path: 'csv-to-map', component: CsvToMapComponent },
    { path: 'comms-service', component: CommsServiceComponent },
    { path: 'epilepsy-diary', component: EpilepsyDiaryComponent },
    { path: 'umbraco8', component: Umbraco8Component }];
