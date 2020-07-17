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

  // these are tags that will change per page change
  updateTags(tag, partUrl) {
    const pageTitle = tag + this.partTitle;

    // title
    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'og:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });

    // url
    this.metaService.updateTag({ name: 'og:url', content: this.url + '/' + partUrl });
    this.metaService.updateTag({ property: 'twitter:url', content: this.url + '/' + partUrl });
  }

  updateHomeTag() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag({ name: 'og:url', content: this.url });
  }
}
