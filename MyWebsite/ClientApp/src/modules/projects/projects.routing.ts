import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component'; 
import { ProjectComponent } from './project/project.component';

export const PROJECT_ROUTES: Routes = [
  { path: 'projects', component: ProjectsComponent },

  { path: 'amk-deezer-api', component: ProjectComponent },
  { path: 'api-the-musical-kind', component: ProjectComponent },
  { path: 'email-service', component: ProjectComponent },
  { path: 'mikes-flooring', component: ProjectComponent },
  { path: 'my-apis', component: ProjectComponent },
  { path: 'my-blogs-api', component: ProjectComponent },
  { path: 'my-projects', component: ProjectComponent },
  { path: 'my-website', component: ProjectComponent }
];
