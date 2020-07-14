import { Component, OnInit } from '@angular/core';
import { faMedkit, faChartLine, faMapMarkedAlt, faUser, faRocket, faHammer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  constructor() { }

  faMedkit = faMedkit;
  faChartLine = faChartLine;
  faMapMarkedAlt = faMapMarkedAlt;
  faUser = faUser;
  faRocket = faRocket;
  faHammer = faHammer;

  epilepsyDiaryInfo = 'Keeping track of your epilepsy i.e. seizure info, medications, doctor appointments etc.';
  epilepsyDiaryTags = ['Angular 9', '.NET Core', 'Swagger'];

  csvToMapInfo = 'Parsing a list of postcodes in both .CSV / .JSON file formats to a map using marker clusters from Google Maps API.';
  csvToMapTags = ['Google Maps', 'CSV', 'JSON', 'API'];

  devopStatsInfo = 'Providing useful stats by combining typical everyday queries using Azure DevOps REST API into a dashboard-type site.';
  devopStatsTags = ['Azure DevOps', '.NET Core', 'Angular 9', 'Swagger', 'REST API'];

  mikesFlooringInfo = "Complimenting Mike's Facebook group, he wanted a website to ultimately showcase the services he provides.";
  mikesFlooringTags = ['Angular 9', 'Firebase', 'SEO'];

  ngOnInit() { }
}
