import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesModuleComponent } from './cookies-module.component';

describe('CookiesModuleComponent', () => {
  let component: CookiesModuleComponent;
  let fixture: ComponentFixture<CookiesModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
