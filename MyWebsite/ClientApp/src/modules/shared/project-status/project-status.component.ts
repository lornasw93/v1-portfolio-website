import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html'
})
export class ProjectStatusComponent implements OnInit {

  @Input() frontend: string;
  @Input() backend: string;
  @Input() hosting: string;
  @Input() status: string;

  faChevronLeft = faChevronLeft;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
