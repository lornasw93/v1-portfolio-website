import { Injectable } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export abstract class MetaDataService {
  constructor(private titleService: Title,
    private metaService: Meta
  ) {
  }

  title = 'Lorna Watson | Software Developer';
  description = 'Lorna is a software developer based in Leeds, UK with a passion for programming, spreadsheets and data analytics.';
  image = 'https://lorna.dev/assets/static/thumbnail.jpeg';
  url = 'https://lorna.dev';

  // per page that isn't the homepage
  partTitle = ' | Lorna Watson';

  //abstract setupTags();

  updateTags(tag, partUrl) {
    const pageTitle = tag + this.partTitle;

    this.titleService.setTitle(pageTitle);

    this.metaService.updateTag({ name: 'og:title', content: pageTitle });
    this.metaService.updateTag({ name: 'og:url', content: this.url + '/' + partUrl });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });

    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:url', content: this.url + '/' + partUrl });
  }

  addInitialTags() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Lorna Watson, lorna.dev, lornasw93, programmer, software developer, full stack developer, full stack, developer, dev, portfolio' },
      { name: 'description', content: this.description },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Lorna Watson' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'og:title', content: this.title },
      { name: 'og:url', content: this.url },
      { name: 'og:description', content: this.description },
      { name: 'og:image', content: this.image },
      { name: 'og:type', content: 'website' },

      // LinkedIn
      { property: 'og:title', content: this.title },
      { property: 'og:url', content: this.url },
      { property: 'og:description', content: this.description },
      { property: 'og:image', content: this.image },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@lornasw93' },
      { name: 'twitter:creator', content: '@lornasw93' },
      { name: 'twitter:title', content: this.title },
      { name: 'twitter:description', content: this.description },
      { name: 'twitter:image', content: this.image }
    ]);
  }
}
