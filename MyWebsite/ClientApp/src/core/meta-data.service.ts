import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class MetaDataService {
  title = 'Lorna Watson | Software Developer';
  description = 'Preferably working full-stack, Lorna is a software developer based in Leeds, UK with a passion for programming and data analytics.';
  image = 'https://firebasestorage.googleapis.com/v0/b/my-website-cbec6.appspot.com/o/laptop-corsair2.jpeg?alt=media&token=06a8227e-99ab-452b-9095-2eb69d431992';
  url = 'https://lorna.dev';

  // per page that isn't the homepage
  partTitle = ' | Software Developer';
  partUrl = this.url + '/';

  abstract setupTags();
}
