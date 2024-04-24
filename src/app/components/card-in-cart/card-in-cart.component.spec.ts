import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInCartComponent } from './card-in-cart.component';

describe('CardInCartComponent', () => {
  let component: CardInCartComponent;
  let fixture: ComponentFixture<CardInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
