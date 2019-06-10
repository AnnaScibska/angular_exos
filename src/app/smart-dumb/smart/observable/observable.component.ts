import { Component } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  myObservableSubject = new Subject<number>();
  myObservedNumber = 10;

  changeNumber(direction) {
    direction ? this.myObservedNumber++ : this.myObservedNumber--;
    this.myObservableSubject.next(this.myObservedNumber);
  }

  getObservableInfo(): Observable<number> {
    return this.myObservableSubject.asObservable();
  }
}
