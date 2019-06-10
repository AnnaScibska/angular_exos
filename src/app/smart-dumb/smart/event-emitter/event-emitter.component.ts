import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent {

  @Output()
    changeAndEmit = new EventEmitter <boolean>();

  emitChange(direction) {
    this.changeAndEmit.emit(direction);
  }

}
