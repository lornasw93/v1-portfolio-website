import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from '../../core/services/meta-data.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html'
})
//export class TechComponent extends MetaDataService implements OnInit {
export class TechComponent implements OnInit {   
  faShare = faShare;

  constructor(titleService: Title,
  //  metaService: Meta
  ) {
    //super(titleService, metaService);
  }

  ngOnInit() {
   // this.updateTags('Tech', 'tech');
  }
}
