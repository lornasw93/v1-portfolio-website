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

  noPosts: boolean;
  isLoading: boolean;
  posts: any[];

  constructor(titleService: Title,
    metaService: Meta,
    private readonly service: ApiService) {
    super(titleService, metaService);
  }

  ngOnInit() {
    this.isLoading = true;
    this.updateTags('Blog', 'blog');

    this.service.getPosts().subscribe((res: any[]) => {
      if (res.length > 0) {
        this.posts = res;
      } else {
        this.noPosts = true;
      }
    }).add(() => {
      this.isLoading = false;
    });
  }
}
