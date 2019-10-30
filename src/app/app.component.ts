import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-exercice';

  posts=[
    {
      title: "Mon Premier post",
      contents: "Jolie image",
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: "Mon Deuxieme post",
      contents: "Je vous trouve magnifique",
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: "Encore un posts",
      contents: "Quel sourire",
      loveIts: 3,
      created_at: new Date()
    }
  ]
}

