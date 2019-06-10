import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {

  @Input() appName: string;

  ngOnInit(): void {
    this.appName = this.appName.toUpperCase();
  }

}
