import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitSlipComponent } from './debit-slip.component';

describe('DebitSlipComponent', () => {
  let component: DebitSlipComponent;
  let fixture: ComponentFixture<DebitSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
