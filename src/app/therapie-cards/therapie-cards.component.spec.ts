import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapieCardsComponent } from './therapie-cards.component';

describe('TherapieCardsComponent', () => {
  let component: TherapieCardsComponent;
  let fixture: ComponentFixture<TherapieCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TherapieCardsComponent]
    });
    fixture = TestBed.createComponent(TherapieCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
