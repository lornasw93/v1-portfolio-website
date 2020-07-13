import { Component, OnInit, Input } from '@angular/core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html'
})
export class ProjectOverviewComponent implements OnInit {
  @Input() name: string;
  @Input() url: string;
  @Input() websiteUrl: string;
  @Input() githubUrl: string;
  @Input() info: string;
  @Input() icon: string;
  @Input() tags: string[];

  faGlobe = faGlobe;

  constructor() { }

  ngOnInit() {
  }
}
