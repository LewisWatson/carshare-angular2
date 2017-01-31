import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CarShare } from '../car-share';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-carshare-detail',
  templateUrl: './carshare-detail.component.html',
  styleUrls: ['./carshare-detail.component.css']
})
export class CarshareDetailComponent implements OnInit {

  carShare: CarShare;
  form: FormGroup;

  constructor(
    private titleService: Title, 
    public fb: FormBuilder, 
    private route: ActivatedRoute,
    private location: Location,
    private dataStoreService: DataStoreService) {
    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      members: ''
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Car Share');

    this.route.params
      .map(params => params['id'])
      .subscribe(
        id => this.loadCarShare(id),
        err => console.log(`Something went wrong: ${err.message}`)
    );
  }

  loadCarShare(id: string) {
    if (id) {
      this.route.params
        .switchMap((params: Params) => this.dataStoreService.findRecord(CarShare, id))
        .subscribe((carShare: CarShare) => this.carShare = carShare);
    }
  }

  updateForm(carShare: CarShare) {
    console.log("updating with car share "+ JSON.stringify(carShare));
    this.carShare = carShare;
    this.form.patchValue({
      id: carShare.id,
      name: carShare.name,
      members: carShare.members
    })
  }

  onSubmit(form: FormGroup) {
    this.dataStoreService.createRecord(CarShare, {
        name: form.get('name').value
        // members: form.get('members').value``
    }).save().subscribe(
      (carShare: CarShare) => this.goBack()
    );
  }

  goBack(): void {
    this.location.back();
  }

}
