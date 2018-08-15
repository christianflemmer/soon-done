import { Component } from '@angular/core';

interface IPost {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent {

  public posts: IPost[] = [];

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