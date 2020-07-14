import { Component, OnInit } from '@angular/core';
import { MetaDataService } from "../../../core/meta-data.service";

@Component({
  selector: 'app-epilepsy-diary',
  templateUrl: './epilepsy-diary.component.html'
})
export class EpilepsyDiaryComponent extends MetaDataService implements OnInit {

  ngOnInit() {
    this.updateTags('Epilepsy Diary', 'projects/epilepsy-diary');
  }
}
