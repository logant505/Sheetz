import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCarouselCardComponent } from './bottom-carousel-card.component';

describe('BottomCarouselCardComponent', () => {
  let component: BottomCarouselCardComponent;
  let fixture: ComponentFixture<BottomCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCarouselCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
