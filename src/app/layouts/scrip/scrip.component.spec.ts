import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScripComponent } from './scrip.component';

describe('ScripComponent', () => {
  let component: ScripComponent;
  let fixture: ComponentFixture<ScripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
