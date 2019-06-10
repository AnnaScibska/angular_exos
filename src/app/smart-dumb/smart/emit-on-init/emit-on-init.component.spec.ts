import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitOnInitComponent } from './emit-on-init.component';

describe('EmitOnInitComponent', () => {
  let component: EmitOnInitComponent;
  let fixture: ComponentFixture<EmitOnInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitOnInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
