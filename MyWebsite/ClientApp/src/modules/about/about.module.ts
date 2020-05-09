import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { DeskComponent } from "./desk/desk.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ABOUT_ROUTES } from "./about.routing";

@NgModule({
  declarations: [
    AboutComponent,
    DeskComponent
  ],
  imports: [FontAwesomeModule, CommonModule, RouterModule.forChild(ABOUT_ROUTES)],
  exports: [RouterModule]
})
export class AboutModule { }
