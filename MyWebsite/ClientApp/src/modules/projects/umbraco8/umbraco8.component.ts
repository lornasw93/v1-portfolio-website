import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';

@Component({
    selector: 'app-umbraco8',
    templateUrl: './umbraco8.component.html'
})
export class Umbraco8Component extends ProjectBaseService implements OnInit {
    projectName = 'umbraco 8';
    statusPercent = 20;
    websiteUrl = 'https://umbraco8.lornasw.co';
    githubUrl = 'https://github.com/lornasw93/umbraco8';
    tags = ['CMS', 'Umbraco'];

    constructor() {
        super();
    }

    ngOnInit() { }
}
