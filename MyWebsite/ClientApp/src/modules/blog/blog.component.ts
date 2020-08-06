import { Component, OnInit } from '@angular/core';
import { faDev } from '@fortawesome/free-brands-svg-icons'; 
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MetaDataService } from 'src/core/meta-data.service';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService } from "../../core/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent extends MetaDataService implements OnInit {
  faDev = faDev;
  faHeart = faHeart;

  constructor(titleService: Title,
    metaService: Meta,
    private readonly blogService: BlogService
  ) {
    super(titleService, metaService);
  }
   
  posts: any[];

  ngOnInit() {
    this.updateTags('Blog', 'blog');

    this.blogService.getPosts().subscribe(
      (res: any[]) => { 
        this.posts = res; 
      },
      err => {
        console.log(err);
      });
  }
}
