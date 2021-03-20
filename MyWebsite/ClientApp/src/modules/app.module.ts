import { LoadingSpinnerModule } from './shared/loading-spinner/loading-spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { APP_ROUTES } from './app.routing';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from "./projects/projects.component";
import { DateAgoPipe } from 'src/core/pipes/date-ago.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TechComponent } from './tech/tech.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, { anchorScrolling: 'enabled' }),
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
    LoadingSpinnerModule
  ],
  exports: [],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TechComponent,
    PageNotFoundComponent,
    BlogComponent,
    ProjectsComponent,
    DateAgoPipe
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
