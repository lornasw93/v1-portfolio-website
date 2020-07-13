import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { ContactComponent } from "../contact/contact.component";
import { AboutComponent } from "../about/about.component";
import { TechComponent } from "../tech/tech.component";
import { DeskComponent } from "../desk/desk.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent,
    data: {
      title: 'About | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer'
    }
  },
  {
    path: 'tech', component: TechComponent,
    data: {
      title: 'Tech | Lorna Watson',
      ogTitle: 'Lorna Watson | Software Developer',
    }
  },
  {
    path: 'desk', component: DeskComponent,
    data: {
      title: 'Desk | Lorna Watson',
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
