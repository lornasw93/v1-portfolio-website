import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';

@Component({
    selector: 'app-comms-service',
    templateUrl: './comms-service.component.html'
})
export class CommsServiceComponent extends ProjectBaseService implements OnInit {
    projectName = 'comms service';
    websiteUrl = 'https://comms-service.lorna.dev';
    githubUrl = 'https://github.com/lornasw93/comms-service';
    tags = ['.NET Core', 'Twilio', 'SMTP', 'API', 'MVC'];

    constructor() {
        super();
    }

    ngOnInit() { }
}
