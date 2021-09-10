import { Component, OnInit } from '@angular/core';
import { faComment, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  faHeart = faHeart;
  faComment = faComment;
  faUser = faUser;

  isBlogLoading: boolean;
  posts: any[];
  count: any;

  constructor(private readonly service: ApiService) {
  }

  ngOnInit() {
    this.isBlogLoading = true;

    this.service.getPosts().subscribe((res: any[]) => {
      this.posts = res;
    }).add(() => {
      this.isBlogLoading = false;
    });

    this.service.getPostCount().subscribe((data: any) => {
      this.count = data.count;
    });
  }
}
