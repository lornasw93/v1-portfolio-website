import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';
import { MetaDataService } from "../../../core/meta-data.service";

@Component({
  selector: 'app-mikes-flooring',
  templateUrl: './mikes-flooring.component.html'
})
export class MikesFlooringComponent extends MetaDataService implements OnInit {

  ngOnInit() {
    this.updateTags('Mike\'s Flooring', 'projects/mikes-flooring');
  }
}
