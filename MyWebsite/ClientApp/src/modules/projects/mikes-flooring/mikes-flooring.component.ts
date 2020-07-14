import { Component, OnInit } from '@angular/core'; 
import { MetaDataService } from "../../../core/meta-data.service";
import { Title, Meta } from "@angular/platform-browser/platform-browser";

@Component({
  selector: 'app-mikes-flooring',
  templateUrl: './mikes-flooring.component.html'
})
export class MikesFlooringComponent extends MetaDataService implements OnInit {
  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('Mike\'s Flooring', 'projects/mikes-flooring');
  }
}
