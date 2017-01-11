import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CarShare } from '../car-share';
import { CarShareService } from '../car-share.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { TripService } from '../trip.service';
import { Trip } from '../trip';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  trip: Trip;
  carShare: CarShare;
  form: FormGroup;

  constructor(
    private carShareService: CarShareService,
    private tripService: TripService,
    private userService: UserService,
    private titleService: Title, 
    public fb: FormBuilder, 
    private route: ActivatedRoute,
    private location: Location) {
    this.form = this.fb.group({
      id: '',
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.titleService.setTitle('User');
    this.route.params
      .switchMap((params: Params) => this.carShareService.getCarShare(params['id']))
      .subscribe((carShare: CarShare) => this.carShare = carShare);
    this.route.params
      .switchMap((params: Params) => this.tripService.getTrip(params['tripId']))
      .subscribe((trip: Trip) => this.trip = trip);
    // this.route.params
    //   .switchMap((params: Params) => this.userService.getUser(params['userId']))
    //   .subscribe((user: User) => this.updateForm(user));
  }

  updateForm(user: User) {
    console.log("updating with user "+ JSON.stringify(user));
    this.user = user;
    this.form.patchValue({
      id: user.id,
      username: user.username
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    var user = new User();
    user.username = form.get('username').value;
    this.userService.create(user).then((user: User) => this.addUserToMembers(user));
  }

  addUserToMembers(user: User) {
    this.carShare.members.push(user);
    this.carShareService.update(this.carShare).then((carShare: CarShare) => this.addPassengerToTrip(user, carShare));
  }

  addPassengerToTrip(passenger: User, carShare: CarShare) {
    this.carShare = carShare;
    this.trip.carShare = carShare;
    this.trip.passengers.push(passenger);
    this.tripService.update(this.trip).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
