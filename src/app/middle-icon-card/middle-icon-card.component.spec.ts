import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleIconCardComponent } from './middle-icon-card.component';

describe('MiddleIconCardComponent', () => {
  let component: MiddleIconCardComponent;
  let fixture: ComponentFixture<MiddleIconCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleIconCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleIconCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
