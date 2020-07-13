import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class MetaDataService {
  title = 'Lorna Watson | Software Developer';
  description = 'Preferably working full-stack, Lorna is a software developer based in Leeds, UK with a passion for programming and data analytics.';
  image = '/assets/about/desk/laptop-corsair2.jpeg';
  url = 'https://lorna.dev';

  // per page that isn't the homepage
  partTitle = ' | Software Developer';
  partUrl = this.url + '/';

  abstract setupTags();
}
