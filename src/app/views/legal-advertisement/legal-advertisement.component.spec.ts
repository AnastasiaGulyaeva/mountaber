import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAdvertisementComponent } from './legal-advertisement.component';

describe('LegalAdvertisementComponent', () => {
  let component: LegalAdvertisementComponent;
  let fixture: ComponentFixture<LegalAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
