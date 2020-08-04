import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { APP_ROUTES } from './app.routing';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DeskComponent } from './desk/desk.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    ProjectsModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DeskComponent,
    ContactComponent,
    PageNotFoundComponent,
    BlogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() { }
}
