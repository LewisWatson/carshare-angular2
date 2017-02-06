import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CarShare } from '../../car-share';
import { CarShareService } from '../../car-share.service';

@Component({
  selector: 'app-carshare-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class CarShareDetailComponent implements OnInit {

  carShare: CarShare;
  form: FormGroup;

  constructor(
    private carShareService: CarShareService,
    private titleService: Title, 
    public fb: FormBuilder, 
    private route: ActivatedRoute,
    private location: Location) {
    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      members: ''
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Car Share');
    this.route.params
      .switchMap((params: Params) => this.carShareService.getCarShare(params['id']))
      .subscribe((carShare: CarShare) => this.updateForm(carShare));
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
    console.log(form);

    var carShare = new CarShare();
    carShare.name = form.get('name').value;
    carShare.members = form.get('members').value;

    this.carShareService.create(carShare).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
