import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsAPI } from './results-api';

describe('ResultsAPI', () => {
  let component: ResultsAPI;
  let fixture: ComponentFixture<ResultsAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsAPI],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
