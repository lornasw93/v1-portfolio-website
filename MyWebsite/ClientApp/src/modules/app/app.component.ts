import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Lorna Watson | Software Developer';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Lorna Watson, lorna.dev, lornasw93, programmer, software developer, full stack developer, full stack, developer, dev, websites, portfolio' },
      { name: 'description', content: 'Preferably working full-stack, Lorna is a software developer based in Leeds, UK with a passion for programming and data analytics.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Lorna Watson' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);
  }
}



//XML sitemap
//favicon
