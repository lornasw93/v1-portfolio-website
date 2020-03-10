import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-project-overview',
    templateUrl: './project-overview.component.html'
})
export class ProjectOverviewComponent implements OnInit {

    @Input() name: string;

    @Input() url: string;

    @Input() info: string;

    @Input() tags: string[];
     
    constructor() { }

    ngOnInit() {
    }

}
