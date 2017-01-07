/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarShareService } from './car-share.service';

describe('CarShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarShareService]
    });
  });

  it('should ...', inject([CarShareService], (service: CarShareService) => {
    expect(service).toBeTruthy();
  }));
});
