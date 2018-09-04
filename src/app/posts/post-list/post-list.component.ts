import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IPost } from '../post.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  public posts: IPost[] = [];

  private postSub: Subscription;

  constructor(
    public _postService: PostService
  ) {}

  public ngOnInit(

  ): void {
    // Fetch all posts
    this.posts = this._postService.getPosts();

    // Setup listener to Subject - update whenever Subject emits new posts
    this.postSub = this._postService.getPostUpdateListener()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  public ngOnDestroy(

  ): void {
    this.postSub.unsubscribe();
  }

  /* public posts: IPost[] = [
    {
      title: 'First post',
      content: 'This is the first post\'s content.'
    },
    {
      title: 'Second post',
      content: 'This is the second post\'s content.'
    },
    {
      title: 'Third post',
      content: 'This is the third post\'s content.'
    }
  ]; */
}
