import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniaComponent } from './technia.component';

describe('TechniaComponent', () => {
  let component: TechniaComponent;
  let fixture: ComponentFixture<TechniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
