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

  url = 'https://lorna.dev';

  updateTags(tag, partUrl) {
    if (tag == null && partUrl == null) {
      const title = 'Lorna Watson | Full-Stack Developer';

      this.updateTitle(title);
      this.updateUrl(this.url);
    } else {
      const endTitle = ' | Lorna Watson';
      const pageTitle = tag + endTitle;

      this.updateTitle(pageTitle);
      this.updateUrl(this.url + '/' + partUrl);
    }
  }

  private updateTitle(title) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'og:title', content: title });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'title', property: 'og:title', content: title });

  }

  private updateUrl(url) {
    this.metaService.updateTag({ name: 'og:url', content: url });
    this.metaService.updateTag({ property: 'twitter:url', content: url });
  }
}
