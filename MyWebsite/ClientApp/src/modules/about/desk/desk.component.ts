import { Component, OnInit } from '@angular/core';
import { faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html'
})
export class DeskComponent implements OnInit {
  faAmazon = faAmazon;
  faEbay = faEbay;

  constructor() { }

  ngOnInit(): void {
  }

}
