import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts = [];

  public onPostAdded(
    post
  ): void {
    this.storedPosts.push(post);
  }

}
