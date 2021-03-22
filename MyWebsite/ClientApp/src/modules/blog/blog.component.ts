import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../core/services/api.service';
import { MetaDataService } from '../../core/services/meta-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent extends MetaDataService implements OnInit {
  faHeart = faHeart;
  faComment = faComment;

  isBlogLoading: boolean;
  posts: any[];

  constructor(titleService: Title,
    metaService: Meta,
    private readonly service: ApiService) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.isBlogLoading = true;
    this.updateTags('Blog', 'blog');

    this.service.getPosts().subscribe((res: any[]) => {
      this.posts = res;
    }).add(() => {
      this.isBlogLoading = false;
    });
  }
}
