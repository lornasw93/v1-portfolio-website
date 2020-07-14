import { Component, OnInit } from '@angular/core'; 
import { MetaDataService } from "../../core/meta-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends MetaDataService implements OnInit {
  ngOnInit() {
    this.addInitialTags();
  }
}
