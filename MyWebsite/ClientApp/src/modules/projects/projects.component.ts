import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { MetaDataService } from "../../core/meta-data.service";
import { GitHubService } from "../../core/github.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent extends MetaDataService implements OnInit {
  faGlobe = faGlobe;
  faGithub = faGithub;
   
  constructor(titleService: Title,
    metaService: Meta,
    private githubService: GitHubService
  ) {
    super(titleService, metaService);
  }

  repos: any[];
  //topics: any[];

  ngOnInit() {
    this.updateTags('Project', 'project');

    this.githubService.getRepos().subscribe(
      (res: any[]) => {
        var repos = [];
        var topics = [];

        res.forEach(value => {
          repos.push(value);

          //value.topics.forEach((v) => {
          //  topics.push(v);
          //});
        });

        this.repos = repos;
        //this.topics = Array.from(new Set(topics));
      },
      err => {
        console.log(err);
      });
  }
}
