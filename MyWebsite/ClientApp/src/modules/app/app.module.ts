import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component'; 
import { ProjectsModule } from "../projects/projects.module";
import { HomeComponent } from "../home/home.component";
import { ContactComponent } from "../contact/contact.component"; 
import { APP_ROUTES } from "./app.routing";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { AboutModule } from "../about/about.module";

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
        AboutModule
    ],
    exports: [],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() { }
}

