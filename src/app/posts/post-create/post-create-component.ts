import { Component, EventEmitter, Output } from '@angular/core';

import { IPost } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  public enteredTitle: string = '';
  public enteredContent: string = '';

  // Listen to this event from the outside (parent component)
  @Output() public postCreated: EventEmitter<IPost> = new EventEmitter<IPost>();

  public onAddPost(): void {
    const post: IPost = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
