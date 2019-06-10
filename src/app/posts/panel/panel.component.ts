import { Component, OnInit } from '@angular/core';
import {DataService} from '../../core/services/data.service';
import {Post} from '../../core/models/post';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  posts: Post[];

  constructor(private postService: DataService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe( (result: Post[]) => {
        this.posts = result;
    });
  }

}
