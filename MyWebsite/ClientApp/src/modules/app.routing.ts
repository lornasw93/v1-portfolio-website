import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechComponent } from './tech/tech.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { BlogComponent } from "./blog/blog.component";
import { ProjectsComponent } from "./projects/projects.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'tech', component: TechComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];
