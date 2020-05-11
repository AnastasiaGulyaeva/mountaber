import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelsComponent } from './jewels.component';

describe('JewelsComponent', () => {
  let component: JewelsComponent;
  let fixture: ComponentFixture<JewelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
