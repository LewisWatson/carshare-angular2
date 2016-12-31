/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TripService } from './trip.service';

describe('TripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripService]
    });
  });

  it('should ...', inject([TripService], (service: TripService) => {
    expect(service).toBeTruthy();
  }));
});
