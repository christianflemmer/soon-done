import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  public enteredTitle: string = '';
  public enteredContent: string = '';

  constructor(
    public _postService: PostService
  ) { }

  public onAddPost(
    form: NgForm
  ): void {
    if (form.invalid) {
      return;
    }
    this._postService.addPost(form.value.title, form.value.content)
  }
}
