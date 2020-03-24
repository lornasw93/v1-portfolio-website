import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
    constructor() { }

    epilepsyDiaryInfo = 'Keeping track of your epilepsy i.e. seizure info, medications, doctor appointments etc.';
    epilepsyDiaryTags = ['Angular 9', '.NET Core', 'Swagger'];

    commsServiceInfo = 'A micro-service that works between my projects to allow for text messaging, emails and push notifications.';
    commsServiceTags = ['.NET Core', 'Twilio', 'SMTP', 'API', 'MVC'];

    csvToMapInfo = 'Parsing a list of postcodes in both .CSV / .JSON file formats to a map using marker clusters from Google Maps API.';
    csvToMapTags = ['Google Maps', 'CSV', 'JSON'];

    devopStatsInfo = 'Providing useful stats by combining typical everyday queries using Azure DevOps REST API.';
    devopStatsTags = ['Azure DevOps', '.NET Core', 'Angular', 'Swagger', 'REST API'];

    umbraco8Info = "Generic Umbraco website (version 8) including pages such as blogs, features and pricing.";
    umbraco8Tags = ['CMS', 'Umbraco'];

    ngOnInit() { }
}
