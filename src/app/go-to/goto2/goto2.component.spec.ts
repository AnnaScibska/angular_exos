import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goto2Component } from './goto2.component';

describe('Goto2Component', () => {
  let component: Goto2Component;
  let fixture: ComponentFixture<Goto2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goto2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
