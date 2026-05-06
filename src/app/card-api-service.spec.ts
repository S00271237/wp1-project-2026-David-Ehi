import { TestBed } from '@angular/core/testing';

import { CardAPiService } from './card-api-service';

describe('CardAPiService', () => {
  let service: CardAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
