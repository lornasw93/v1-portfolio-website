import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'projects',
        loadChildren: () => import(`../../modules/projects/projects.module`)
          .then(m => m.ProjectsModule)
    },
];
