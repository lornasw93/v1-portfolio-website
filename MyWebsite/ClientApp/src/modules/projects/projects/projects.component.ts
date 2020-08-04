import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { Title, Meta } from '@angular/platform-browser';
import { GitHubService } from "../../../core/github.service";
import { MetaDataService } from "../../../core/meta-data.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent extends MetaDataService implements OnInit {
  faGlobe = faGlobe;
  faGithub = faGithub;

  //epilepsyDiaryInfo = 'Keeping track of your epilepsy i.e. seizure info, medications, doctor appointments etc.';
  //epilepsyDiaryTags = ['Angular 9', '.NET Core', 'Swagger'];

  //csvToMapInfo = 'Parsing a list of postcodes in both .CSV / .JSON file formats to a map using marker clusters from Google Maps API.';
  //csvToMapTags = ['Google Maps', 'CSV', 'JSON', 'API'];

  //devopStatsInfo = 'Providing useful stats by combining typical everyday queries using Azure DevOps REST API into a dashboard-type site.';
  //devopStatsTags = ['Azure DevOps', '.NET Core', 'Angular 9', 'Swagger', 'REST API'];

  constructor(titleService: Title,
    metaService: Meta,
    private githubService: GitHubService
  ) {
    super(titleService, metaService);
  }

  repos: any[];

  ngOnInit() {
    this.updateTags('Project', 'project');

    this.githubService.getRepos().subscribe(
      (res: any[]) => {
        var o = [];

        res.forEach(value => {
          if (!value.name.includes('.backend') && !value.name.includes('.frontend')) {
            o.push(value);
          }
        });

        this.repos = o;

        console.log(o);
      },
      err => {
        console.log(err);
      });
  }
}
