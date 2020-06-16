import { Component, OnInit } from '@angular/core';
import { ProjectBaseService } from '../../../core/project.base.service';

@Component({
  selector: 'app-mikes-flooring',
  templateUrl: './mikes-flooring.component.html'
})
export class MikesFlooringComponent extends ProjectBaseService implements OnInit {
  projectName = 'mikes flooring';
  websiteUrl = 'https://mikesflooring.co.uk';
  githubUrl = 'https://github.com/lornasw93/mikes-flooring';
  tags = ['.NET Core', 'Angular', 'Firebase'];
 
  constructor() {
    super();
  }

  ngOnInit() { }
}
