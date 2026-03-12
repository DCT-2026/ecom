import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProduct } from './mobile-product';

describe('MobileProduct', () => {
  let component: MobileProduct;
  let fixture: ComponentFixture<MobileProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
