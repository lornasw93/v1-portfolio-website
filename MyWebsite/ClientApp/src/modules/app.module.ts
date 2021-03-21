import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DateAgoPipe } from 'src/core/pipes/date-ago.pipe';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from "./projects/projects.component";
import { FooterComponent } from './shared/footer/footer.component';
import { LoadingSpinnerModule } from './shared/loading-spinner/loading-spinner.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
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
    LoadingSpinnerModule,
    ScrollToModule.forRoot()
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
