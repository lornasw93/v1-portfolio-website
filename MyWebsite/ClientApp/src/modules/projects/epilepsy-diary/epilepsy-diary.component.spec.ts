import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilepsyDiaryComponent } from './epilepsy-diary.component';

describe('EpilepsyDiaryComponent', () => {
  let component: EpilepsyDiaryComponent;
  let fixture: ComponentFixture<EpilepsyDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpilepsyDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpilepsyDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
