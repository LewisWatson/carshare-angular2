import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location } from '@angular/common';
import { Trip } from '../trip';
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

    // this.route.params
    //   .switchMap((params: Params) => this.dataStoreService.findRecord(Trip, params['tripId']))
    //   .subscribe((trip: Trip) => this.updateForm(trip));
  }

  // updateForm(trip: Trip) {
  //   console.log("updating from with trip "+ JSON.stringify(trip));
  //   this.trip = trip;
  //   this.form.patchValue({
  //     id: trip.id,
  //     metres: trip.metres,
  //     timestamp: trip.timestamp,
  //     driver: trip.driver,
  //     passengers: trip.passengers
  //   })
  // }

  onSubmit(form: FormGroup) {
    // console.log(form);
    this.dataStoreService.createRecord(Trip, {
        metres: 123 //form.get('metres').value
        // timestamp: form.get('timestamp').value
        // driver: form.get('driver').value
    }).save().subscribe(
      (trip: Trip) => this.addTripToCarShare(trip)
    );
  }

  addTripToCarShare(trip: Trip) {
    console.log("adding trip to car share");

    if(!this.carShare.trips) {
      this.carShare.trips = new Array();
    }

    this.carShare.trips.push(trip);
    this.dataStoreService.saveRecord(CarShare, this.carShare).subscribe((carShare: CarShare) => this.goBack());
  }

  addMember() {
    this.router.navigate(['/carshare', this.trip.carShare.id, 'trip', this.trip.id, 'passenger', 'new']);
  }

  goBack(): void {
    this.location.back();
  }

}
