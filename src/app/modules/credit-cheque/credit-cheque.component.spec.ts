import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditChequeComponent } from './credit-cheque.component';

describe('CreditChequeComponent', () => {
  let component: CreditChequeComponent;
  let fixture: ComponentFixture<CreditChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
