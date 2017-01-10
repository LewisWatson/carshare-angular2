import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Trip } from '../trip';
import { User } from '../user';
import { CarShare } from '../car-share';
import { CarShareService } from '../car-share.service';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  carShare: CarShare;

  trips: Trip[];

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private carshareService: CarShareService,
    private tripService: TripService) { }

  ngOnInit() {
    this.titleService.setTitle("Trips");
    this.route.params
      .switchMap((params: Params) => this.carshareService.getCarShare(+params['id']))
      .subscribe(carShare => this.carShare = carShare);
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips().then(trips => this.trips = trips);
  }

  onSelect(trip: Trip): void {
    this.router.navigate(['/carshare', this.carShare.id, 'trip', trip.id]);
  }

  newTrip() {
    this.router.navigate(['/carshare', this.carShare.id, 'trip', 'new']);
  }

}
