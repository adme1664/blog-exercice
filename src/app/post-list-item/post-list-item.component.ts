import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() title: string;
  @Input() contents: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  onLoveIt(){
    this.loveIts=this.loveIts+1;
    console.log(this.loveIts);
    return ""+this.loveIts;
  }
  onDontLoveIt(){
    this.loveIts=this.loveIts-1;
    console.log(""+this.loveIts);
    return this.loveIts;
  }

}
