import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  repo: string;

  constructor(private activatedRoute: ActivatedRoute) {

    console.log(this.activatedRoute.snapshot.params);
     
  }

  ngOnInit(): void {
  }

}
