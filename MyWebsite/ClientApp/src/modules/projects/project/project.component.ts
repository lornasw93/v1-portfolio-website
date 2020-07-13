import { Component, OnInit, Input } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
    @Input() websiteUrl: string;
    @Input() githubUrl: string;
    @Input() tags: string[];

       faGlobe = faGlobe;
      faGithub = faGithub;

    constructor() { }

    ngOnInit() { }

    getProject() { }
}
