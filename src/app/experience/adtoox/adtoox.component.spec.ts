import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtooxComponent } from './adtoox.component';

describe('AdtooxComponent', () => {
  let component: AdtooxComponent;
  let fixture: ComponentFixture<AdtooxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdtooxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdtooxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
