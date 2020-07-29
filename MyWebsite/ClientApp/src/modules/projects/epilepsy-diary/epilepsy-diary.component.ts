import { Component, OnInit } from '@angular/core';
import { MetaDataService } from 'src/core/meta-data.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-epilepsy-diary',
  templateUrl: './epilepsy-diary.component.html'
})
export class EpilepsyDiaryComponent extends MetaDataService implements OnInit {
  constructor(titleService: Title,
    metaService: Meta
  ) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.updateTags('Epilepsy Diary', 'projects/epilepsy-diary');
  }
}
