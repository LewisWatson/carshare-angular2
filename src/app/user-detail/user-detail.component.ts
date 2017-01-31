import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ErrorResponse } from "angular2-jsonapi";
import { CarShare } from '../car-share';
import { User } from '../user';
import { DataStoreService } from '../data-store.service';
import { Trip } from '../trip';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  trip: Trip;
  form: FormGroup;

  constructor(
    private dataStoreService: DataStoreService,
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
      .switchMap((params: Params) => this.dataStoreService.findRecord(Trip, params['tripId'], {
        include: 'carShares'
      }))
      .subscribe((trip: Trip) => this.trip = trip);
  }

  // updateForm(user: User) {
  //   console.log("updating with user "+ JSON.stringify(user));
  //   this.user = user;
  //   this.form.patchValue({
  //     id: user.id,
  //     username: user.username
  //   })
  // }

  onSubmit(form: FormGroup) {
    this.dataStoreService.createRecord(User, {
      username: form.get('username').value
    }).save().subscribe(
      (user: User) => this.addUserToMembers(user, this.trip),
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

  addUserToMembers(user: User, trip: Trip) {
    console.log("add users to members");
    if(!trip.carShare.members) {
      trip.carShare.members = new Array();
    }
    trip.carShare.members.push(user);

    if(!trip.passengers) {
      trip.passengers = new Array();
    }
    trip.passengers.push(user);

    this.trip.save().subscribe(
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
    );}

  goBack(): void {
    this.location.back();
  }

}
