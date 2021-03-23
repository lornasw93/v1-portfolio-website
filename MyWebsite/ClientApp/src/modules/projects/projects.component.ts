import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../core/services/api.service';
import { MetaDataService } from '../../core/services/meta-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent extends MetaDataService implements OnInit {
  faStar = faStar;
  faDownload = faDownload;

  isLoading: boolean;
  repos: any[];

  constructor(titleService: Title,
    metaService: Meta,
    private service: ApiService
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.isLoading = true;

    this.updateTags('Projects', 'projects');

    this.service.getRepos().subscribe((res: any[]) => {
      this.repos = res;
    }).add(() => {
      this.isLoading = false;
    });
  }
}
