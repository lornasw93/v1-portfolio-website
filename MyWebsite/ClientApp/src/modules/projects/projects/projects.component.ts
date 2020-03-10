import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
    constructor() { }

    epilepsyDiaryInfo = 'Some details...';
    epilepsyDiaryTags = ['Angular 9', '.NET Core', 'Swagger'];

    commsServiceInfo = 'This is a communications micro-service that works between my projects with the idea in mind to allow for text messaging, emails and push notifications.';
    commsServiceTags = ['.NET Core', 'Twilio', 'SMTP', 'API', 'MVC'];

    csvToMapInfo = 'Some details...';
    csvToMapTags = ['Google Maps', 'CSV', 'JSON'];

    devopStatsInfo = 'Purpose is to provide useful stats by combining typical everyday queries using Azure DevOps REST API.';
    devopStatsTags = ['Azure DevOps', '.NET Core', 'Angular', 'Swagger', 'REST API'];

    umbraco8Info = "This is a generic Umbraco website including pages such as blogs, features and pricing.";
    umbraco8Tags = ['CMS', 'Umbraco'];

    ngOnInit() { }

    //getProjects(): Project[] {
    //  var project = new Project();
    //}
}
