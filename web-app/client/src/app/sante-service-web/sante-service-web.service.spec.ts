import { TestBed } from '@angular/core/testing';

import { SanteServiceWebService } from './sante-service-web.service';

describe('SanteServiceWebService', () => {
  let service: SanteServiceWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanteServiceWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
