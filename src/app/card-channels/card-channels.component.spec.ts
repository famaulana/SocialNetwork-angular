import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChannelsComponent } from './card-channels.component';

describe('CardChannelsComponent', () => {
  let component: CardChannelsComponent;
  let fixture: ComponentFixture<CardChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
