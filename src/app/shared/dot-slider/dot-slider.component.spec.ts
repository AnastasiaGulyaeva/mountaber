import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotSliderComponent } from './dot-slider.component';

describe('DotSliderComponent', () => {
  let component: DotSliderComponent;
  let fixture: ComponentFixture<DotSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
