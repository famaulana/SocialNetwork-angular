import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrouselComponent } from './cardrousel.component';

describe('CardrouselComponent', () => {
  let component: CardrouselComponent;
  let fixture: ComponentFixture<CardrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
