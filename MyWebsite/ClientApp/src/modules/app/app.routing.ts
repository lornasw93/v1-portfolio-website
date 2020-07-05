import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component"; 

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{
  //  path: 'about',
  //  loadChildren: () => import(`../../modules/about/about.module`).then(m => m.AboutModule)
  //},
  //{ path: 'contact', component: ContactComponent },
  //{
  //  path: 'projects',
  //  loadChildren: () => import(`../../modules/projects/projects.module`).then(m => m.ProjectsModule)
  //},
];
