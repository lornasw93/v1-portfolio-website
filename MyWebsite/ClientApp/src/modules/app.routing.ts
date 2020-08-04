import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechComponent } from './tech/tech.component';
import { DeskComponent } from './desk/desk.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { BlogComponent } from "./blog/blog.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'tech', component: TechComponent },
  { path: 'desk', component: DeskComponent }, 
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'projects',
    loadChildren: () => import(`../modules/projects/projects.module`).then(m => m.ProjectsModule)
  },
  { path: '**', component: PageNotFoundComponent }
];
