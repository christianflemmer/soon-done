import { Component, EventEmitter, Output } from '@angular/core';

import { IPost } from '../post.model';
import { NgForm } from '@angular/forms';

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

  public onAddPost(
    form: NgForm
  ): void {
    if (form.invalid) {
      return;
    }
    const post: IPost = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }
}
