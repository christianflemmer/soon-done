import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  public enteredTitle: string = '';
  public enteredContent: string = '';

  // Listen to this event from the outside (parent component)
  @Output() public postCreated: EventEmitter = new EventEmitter();

  public onAddPost(): void {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
