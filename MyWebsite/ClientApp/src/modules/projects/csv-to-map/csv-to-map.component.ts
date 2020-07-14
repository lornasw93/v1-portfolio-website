import { Component, OnInit } from '@angular/core'; 
import { MetaDataService } from "../../../core/meta-data.service";

@Component({
  selector: 'app-csv-to-map',
  templateUrl: './csv-to-map.component.html'
})
export class CsvToMapComponent extends MetaDataService implements OnInit {
 
  ngOnInit() {
    this.updateTags('CSV to Map', 'projects/csv-to-map');
  }
}
