import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ErrorResponse } from "angular2-jsonapi";

import { Trip } from '../trip';
import { User } from '../user';
import { CarShare } from '../car-share';
import { DataStoreService } from '../data-store.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  carShare: CarShare;
  trip: Trip;
  form: FormGroup;

  constructor(
    private titleService: Title,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private dataStoreService: DataStoreService) {
    this.form = this.fb.group({
      id: '',
      metres: ['', Validators.required],
      timestamp: [new Date(), Validators.required],
      driver: '', //['', Validators.required],
      passengers: ''
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Trip');

    this.route.params
      .switchMap((params: Params) => this.dataStoreService.findRecord(CarShare, params['id']))
      .subscribe((carShare: CarShare) => this.carShare = carShare);

    this.route.params
      .map(params => params['tripId'])
      .subscribe(
        tripId => this.loadTrip(tripId),
        err => console.log(`Something went wrong: ${err.message}`)
      );
  }

  loadTrip(tripId: string) {
    if (tripId) {
      this.route.params
        .switchMap((params: Params) => this.dataStoreService.findRecord(Trip, params['tripId']))
        .subscribe((trip: Trip) => this.updateForm(trip));
    }
  }

  initialisCarShare(carshare: CarShare) {
    this.carShare = carshare;

    if (!this.carShare.trips) {
      console.log("trip array undefined so initialising");
      this.carShare.trips = new Array();
    }

  }

  updateForm(trip: Trip) {
    this.trip = trip;
    this.form.patchValue({
      id: trip.id,
      metres: trip.metres,
      timestamp: trip.timestamp,
      driver: trip.driver,
      passengers: trip.passengers
    })
  }

  onSubmit(form: FormGroup) {
    // console.log(form);

    this.dataStoreService.createRecord(Trip, {
      carShare: this.carShare,
      metres: form.get('metres').value,
      timestamp: form.get('timestamp').value
      // driver: new User(), //form.get('driver').value
    }).save().subscribe(
      (trip: Trip) => this.goBack(),
      (errorResponse) => {
        if (errorResponse instanceof ErrorResponse) {
          // do something with errorResponse
          console.log("ErrorResponse")
          console.log(errorResponse.errors);
        } else {
          console.log("not error response");
          console.log(errorResponse);
          this.goBack()
        }
      }
      );
  }

  addMember() {
    this.router.navigate(['/carshare', this.carShare.id, 'trip', this.trip.id, 'passenger', 'new']);
  }

  goBack(): void {
    this.location.back();
  }

}
