import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faDownload, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../core/services/api.service';
import { MetaDataService } from '../../core/services/meta-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
//export class ProjectsComponent extends MetaDataService implements OnInit {
export class ProjectsComponent implements OnInit {
  faStar = faStar;
  faDownload = faDownload;
  faGlobe = faGlobe;

  isLoading: boolean;
  repos: any[];

  constructor(titleService: Title,
   // metaService: Meta,
    private service: ApiService
  ) {
   // super(titleService, metaService);
  }

  ngOnInit() {
    this.isLoading = true;

   // this.updateTags('Projects', 'projects');

    this.service.getRepos().subscribe((data: any[]) => {
      this.repos = data;
    }).add(() => {
      this.isLoading = false;
    });
  }
}
