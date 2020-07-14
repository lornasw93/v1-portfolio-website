import { Component, OnInit } from '@angular/core';
import { faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';
import { MetaDataService } from "../../core/meta-data.service";

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html'
})
export class DeskComponent extends MetaDataService implements OnInit {
  faAmazon = faAmazon;
  faEbay = faEbay;

  ngOnInit() {
    this.updateTags('Contact', 'desk');
  }
}
