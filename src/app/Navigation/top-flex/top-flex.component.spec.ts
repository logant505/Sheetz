import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFlexComponent } from './top-flex.component';

describe('TopFlexComponent', () => {
  let component: TopFlexComponent;
  let fixture: ComponentFixture<TopFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
