import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../core/meta-data.service";

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html'
})
export class TechComponent extends MetaDataService implements OnInit {

  ngOnInit() {
    this.updateTags('Tech', 'tech');
  }
}
