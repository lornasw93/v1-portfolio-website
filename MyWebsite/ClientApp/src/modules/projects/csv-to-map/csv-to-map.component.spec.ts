import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvToMapComponent } from './csv-to-map.component';

describe('CsvToMapComponent', () => {
  let component: CsvToMapComponent;
  let fixture: ComponentFixture<CsvToMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvToMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvToMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
