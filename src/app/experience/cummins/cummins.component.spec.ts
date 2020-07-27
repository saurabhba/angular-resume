import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumminsComponent } from './cummins.component';

describe('CumminsComponent', () => {
  let component: CumminsComponent;
  let fixture: ComponentFixture<CumminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
