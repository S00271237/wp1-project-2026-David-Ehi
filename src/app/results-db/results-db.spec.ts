import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsDB } from './results-db';

describe('ResultsDB', () => {
  let component: ResultsDB;
  let fixture: ComponentFixture<ResultsDB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsDB],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsDB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
