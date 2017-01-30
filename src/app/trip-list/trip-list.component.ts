import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Trip } from '../trip';
import { User } from '../user';
import { CarShare } from '../car-share';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  carShare: CarShare;

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.titleService.setTitle("Trips");
    this.route.params
      .switchMap((params: Params) => this.dataStoreService.findRecord(CarShare, params['id'], {
        include: 'trips'
      }))
      .subscribe((carShare: CarShare) => this.setCarShare(carShare));
  }

  setCarShare(carShare: CarShare) {
    this.carShare = carShare;
  }

  onSelect(trip: Trip): void {
    this.router.navigate(['/carshare', trip.carShare.id, 'trip', trip.id]);
  }

  newTrip() {
    this.router.navigate(['/carshare', this.carShare.id, 'trip', 'new']);
  }

}
