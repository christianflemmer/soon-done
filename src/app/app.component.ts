import { Component } from '@angular/core';

import { IPost } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public storedPosts: IPost[] = [];

  public onPostAdded(
    post: IPost
  ): void {
    this.storedPosts.push(post);
  }

}
