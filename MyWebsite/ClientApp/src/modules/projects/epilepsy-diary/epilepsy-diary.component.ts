import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';

@Component({
    selector: 'app-epilepsy-diary',
    templateUrl: './epilepsy-diary.component.html'
})
export class EpilepsyDiaryComponent extends ProjectBaseService implements OnInit {
    projectName = 'epilepsy diary';
    websiteUrl = 'https://epilepsy-diary.co';
    githubUrl = 'https://github.com/lornasw93/epilepsy-diary';
    tags = ['Angular 9', '.NET Core', 'Swagger'];

    constructor() {
        super();
    }

    ngOnInit() { }
}
