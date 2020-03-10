import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';

@Component({
    selector: 'app-csv-to-map',
    templateUrl: './csv-to-map.component.html'
})
export class CsvToMapComponent extends ProjectBaseService implements OnInit { 
    projectName = 'csv to map';
    statusPercent = 80;
    websiteUrl = 'https://csv-to-map.lornasw.co';
    githubUrl = 'https://github.com/lornasw93/csv-to-map';
    tags = ['Google Maps', 'CSV', 'JSON'];

    constructor() {
        super();
    }

    ngOnInit() { }
}
