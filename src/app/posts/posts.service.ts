import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { IPost } from './post.model';

@Injectable({providedIn: 'root'})         // Provide this service at root level

export class PostService {
  private posts: IPost[] = [];
  private postsUpdated: Subject<IPost[]> = new Subject<IPost[]>();

  // Method for getting posts for anyone who's interested
  public getPosts(

  ): IPost[] {
    // Spread operator (pull all objects out of original array and add them to this new array)
    // New array with the old objects (copy the array)
    return [...this.posts];
  }
  /**
   * Make sure that postsUpdated can only be emitted from this service,
   * not make it possible for outside components to emit
   */
  public getPostUpdateListener(

  ): Observable<IPost[]> {
    return this.postsUpdated.asObservable();
  }

  public addPost(
    title: string,
    content: string
  ): void {
    const post: IPost = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

}
