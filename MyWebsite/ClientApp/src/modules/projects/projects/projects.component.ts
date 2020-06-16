import { Component, OnInit } from '@angular/core';
import { faMedkit, faChartLine, faComments, faMapMarkedAlt, faUser, faRocket, faHammer } from '@fortawesome/free-solid-svg-icons';
import { faUmbraco } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  faMedkit = faMedkit;
  faChartLine = faChartLine;
  faComments = faComments;
  faMapMarkedAlt = faMapMarkedAlt;
  faUser = faUser;
  faRocket = faRocket;
  faUmbraco = faUmbraco;
  faHammer = faHammer;

  epilepsyDiaryInfo = 'Keeping track of your epilepsy i.e. seizure info, medications, doctor appointments etc.';
  epilepsyDiaryTags = ['Angular 9', '.NET Core', 'Swagger'];

  commsServiceInfo = 'A micro-service that works between my projects with the purpose of text messaging, emails and push notifications.';
  commsServiceTags = ['.NET Core', 'Twilio', 'SMTP', 'API', 'MVC'];

  csvToMapInfo = 'Parsing a list of postcodes in both .CSV / .JSON file formats to a map using marker clusters from Google Maps API.';
  csvToMapTags = ['Google Maps', 'CSV', 'JSON', 'API'];

  devopStatsInfo = 'Providing useful stats by combining typical everyday queries using Azure DevOps REST API into a dashboard-type site.';
  devopStatsTags = ['Azure DevOps', '.NET Core', 'Angular', 'Swagger', 'REST API'];

  umbraco8Info = "Generic Umbraco (version 8) website including pages such as blogs, features and pricing.";
  umbraco8Tags = ['CMS', 'Umbraco'];

  gitlandArmyInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum purus sit amet justo malesuada dignissim. Sed eu porttitor ex.";
  gitlandArmyTags = ['.NET Core', 'Angular', 'MVC', 'Swagger', 'API'];

  identityServerInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum purus sit amet justo malesuada dignissim. Sed eu porttitor ex.";
  identityServerTags = ['.NET Core', 'Auth', 'API'];

  mikesFlooringInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum purus sit amet justo malesuada dignissim. Sed eu porttitor ex.";
  mikesFlooringTags = ['.NET Core', 'Angular', 'Firebase'];

  ngOnInit() { }
}
