import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Umbraco8Component } from './umbraco8.component';

describe('Umbraco8Component', () => {
  let component: Umbraco8Component;
  let fixture: ComponentFixture<Umbraco8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Umbraco8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Umbraco8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
