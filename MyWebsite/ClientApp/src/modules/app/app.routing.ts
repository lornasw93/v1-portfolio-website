import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { ContactComponent } from "../contact/contact.component";
import { AboutComponent } from "../about/about.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '', redirectTo: '/', pathMatch: 'full',
    data: {
      title: 'Lorna Watson | Software Developer',
      ogTitle: '...',
    }
  },
  {
    path: 'about', component: AboutComponent,
    data: {
      title: 'About | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      title: 'Contact | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'projects',
    loadChildren: () => import(`../../modules/projects/projects.module`).then(m => m.ProjectsModule)
  }
];
