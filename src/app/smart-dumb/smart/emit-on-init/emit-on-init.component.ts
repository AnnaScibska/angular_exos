import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-emit-on-init',
  templateUrl: './emit-on-init.component.html',
  styleUrls: ['./emit-on-init.component.css']
})
export class EmitOnInitComponent implements OnInit {

  dumbNumber = 14;

  @Output()
  emitNumber = new EventEmitter <number>();

  ngOnInit(): void {
    this.emitNumber.emit(this.dumbNumber);
  }
}
