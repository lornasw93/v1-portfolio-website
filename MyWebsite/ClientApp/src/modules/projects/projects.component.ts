import { Component, OnInit } from '@angular/core';
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { MetaDataService } from "../../core/meta-data.service";
import { GitHubService } from "../../core/github.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent extends MetaDataService implements OnInit {
  faStar = faStar;
  faDownload = faDownload;

  constructor(titleService: Title,
    metaService: Meta,
    private githubService: GitHubService
  ) {
    super(titleService, metaService);
  }

  repos: any[];
  projectCount: number;

  ngOnInit() {
    this.updateTags('Projects', 'projects');
    this.getProjects();
    this.getProjectCount();
  }

  getProjects() {
    this.githubService.getRepos().subscribe((res: any[]) => {
      var repos = [];

      res.forEach(value => { repos.push(value); });

      this.repos = repos;

      console.log(repos)

    }, err => { console.log(err); });
  }

  getProjectCount() {
    this.githubService.getProjectCount().subscribe(
      (res: any) => {
        this.projectCount = res.count;
      }, err => { console.log(err); });
  }
}
