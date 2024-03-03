import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapieComponent } from './therapie.component';

describe('TherapieComponent', () => {
  let component: TherapieComponent;
  let fixture: ComponentFixture<TherapieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TherapieComponent]
    });
    fixture = TestBed.createComponent(TherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
