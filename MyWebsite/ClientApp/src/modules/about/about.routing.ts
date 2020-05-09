import { Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { DeskComponent } from "./desk/desk.component";

export const ABOUT_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'desk', component: DeskComponent }];
