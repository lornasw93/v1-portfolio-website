import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-csv-to-map',
  templateUrl: './csv-to-map.component.html'
})
export class CsvToMapComponent implements OnInit {
  faClock = faClock;

  //projectName = 'csv to map';
  //websiteUrl = 'https://csv-to-map.lorna.dev';
  //githubUrl = 'https://github.com/lornasw93/csv-to-map';
  //tags = ['Google Maps', 'CSV', 'JSON'];

  constructor() {
    //super();
  }

  ngOnInit() { }
}
