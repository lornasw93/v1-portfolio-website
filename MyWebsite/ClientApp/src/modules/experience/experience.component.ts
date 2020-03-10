import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  faLaptopCode = faLaptopCode;
  faGraduationCap = faGraduationCap;

  constructor() { }

  ngOnInit() { }
}
