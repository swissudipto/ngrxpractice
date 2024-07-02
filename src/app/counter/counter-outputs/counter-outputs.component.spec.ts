import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputsComponent } from './counter-outputs.component';

describe('CounterOutputsComponent', () => {
  let component: CounterOutputsComponent;
  let fixture: ComponentFixture<CounterOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
