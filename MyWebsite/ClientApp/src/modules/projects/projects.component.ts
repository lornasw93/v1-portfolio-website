import { Component, OnInit } from '@angular/core';
import { faDownload, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  faStar = faStar;
  faDownload = faDownload;
  faGlobe = faGlobe;

  isLoading: boolean;
  repos: any[];
  count: any;

  constructor(private service: ApiService) {
  }

  ngOnInit() {
    this.isLoading = true;

    this.service.getRepos().subscribe((data: any[]) => {
      this.repos = data;
    }).add(() => {
      this.isLoading = false;
    });

    this.service.getProjectCount().subscribe((data: any) => {
      this.count = data.count;
    });  
  }
}
