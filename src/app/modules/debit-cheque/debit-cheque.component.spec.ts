import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitChequeComponent } from './debit-cheque.component';

describe('DebitChequeComponent', () => {
  let component: DebitChequeComponent;
  let fixture: ComponentFixture<DebitChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
