import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaDataService } from "../../core/meta-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends MetaDataService implements OnInit {

  constructor(private titleService: Title,
    private metaService: Meta
  ) {
    super();
  }

  ngOnInit() {
    this.setupTags();
  }

  setupTags() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Lorna Watson, lorna.dev, lornasw93, programmer, software developer, full stack developer, full stack, developer, dev,  portfolio' },
      { name: 'description', content: this.description },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Lorna Watson' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'og:title', content: this.title },
      { name: 'og:url', content: this.url },
      { name: 'og:description', content: this.description },
      { name: 'og:image', content: this.image },
      { name: 'og:type', content: 'website' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@lornasw93' },
      { name: 'twitter:creator', content: '@lornasw93' },
      { name: 'twitter:title', content: this.title },
      { name: 'twitter:description', content: this.description },
      { name: 'twitter:image', content: this.image }
    ]);
  }
}

//XML sitemap
//favicon
