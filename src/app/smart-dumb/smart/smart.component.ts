import {Component, OnInit, ViewChild} from '@angular/core';
import {ObservableComponent} from './observable/observable.component';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  appName = 'App Name';
  numberChangedOnEventEmit = 0;
  numberFromSubscription;

  dumbNumber;

  @ViewChild('myObservable') observableComponent: ObservableComponent;

  ngOnInit(): void {
    this.observableComponent.getObservableInfo().subscribe(observedNumber => {
      this.numberFromSubscription = observedNumber;
    });
  }

  onEmitChange(direction: boolean) {
    direction ? this.numberChangedOnEventEmit++ : this.numberChangedOnEventEmit--;
  }

  onEmit(dumbNumber) {
    this.dumbNumber = dumbNumber;
  }
}
