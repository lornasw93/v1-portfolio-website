import { Component, OnInit } from '@angular/core'; 
import { MetaDataService } from "../../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser/platform-browser";

@Component({
  selector: 'app-csv-to-map',
  templateUrl: './csv-to-map.component.html'
})
export class CsvToMapComponent extends MetaDataService implements OnInit {
  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('CSV to Map', 'projects/csv-to-map');
  }
}
