import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Trip } from '../trip';
import { CarShare } from '../car-share';
import { TripService } from '../trip.service';
import { CarShareService } from '../car-share.service';

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
    private carShareService: CarShareService,
    private tripService: TripService, 
    private titleService: Title, 
    public fb: FormBuilder, 
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {
    this.form = this.fb.group({
      id: '',
      metres: ['', Validators.required],
      timestamp: [new Date(), Validators.required],
      driver: ['', Validators.required],
      passengers: ''
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Trip');
    this.route.params
      .switchMap((params: Params) => this.tripService.getTrip(params['tripId']))
      .subscribe((trip: Trip) => this.updateForm(trip));
    this.route.params
      .switchMap((params: Params) => this.carShareService.getCarShare(params['id']))
      .subscribe((carShare: CarShare) => this.carShare = carShare);
  }

  updateForm(trip: Trip) {
    console.log("updating from with trip "+ JSON.stringify(trip));
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
    console.log(form);
    var trip = new Trip();
    trip.metres = form.get('metres').value;
    trip.timestamp = form.get('timestamp').value;
    trip.driver = form.get('driver').value;
    this.tripService.create(trip).then(() => this.goBack());
  }

  addMember() {
    this.router.navigate(['/carshare', this.carShare.id, 'trip', this.trip.id, 'passenger', 'new']);
  }

  goBack(): void {
    this.location.back();
  }

}
