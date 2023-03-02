import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioLayoutComponent } from './bio-layout.component';

describe('BioLayoutComponent', () => {
  let component: BioLayoutComponent;
  let fixture: ComponentFixture<BioLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
