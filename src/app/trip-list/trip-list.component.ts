import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { User } from '../user';
import { CarShare } from '../car-share';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[];
  selectedTrip: Trip;

  constructor(private tripService: TripService) { }

  getTrips(): void {
    this.tripService.getTrips().then(trips => this.trips = trips);
  }

  ngOnInit() {
      this.getTrips();
  }

  onSelect(trip: Trip): void {
    this.selectedTrip = trip;
  }

}
