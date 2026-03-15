import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAccessories } from './car-accessories';

describe('CarAccessories', () => {
  let component: CarAccessories;
  let fixture: ComponentFixture<CarAccessories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarAccessories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAccessories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
