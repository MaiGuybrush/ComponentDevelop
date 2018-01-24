import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectMapComponent } from './defect-map.component';

describe('DefectMapComponent', () => {
  let component: DefectMapComponent;
  let fixture: ComponentFixture<DefectMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
