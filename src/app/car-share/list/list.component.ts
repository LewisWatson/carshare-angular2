import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router }   from '@angular/router';
import { CarShare } from '../../car-share';
import { CarShareService } from '../../car-share.service';

@Component({
  selector: 'app-carshare-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CarShareListComponent implements OnInit {

  carShares: CarShare[];
  
  constructor(
    private titleService: Title,
    private router: Router, 
    private carShareService: CarShareService) { }

  ngOnInit() {
    this.getCarShares();
    this.titleService.setTitle("Car Shares");
  }

  getCarShares(): void {
    this.carShareService.getCarShares().then(carShares => this.carShares = carShares);
  }

  onSelect(carShare: CarShare): void {
    this.router.navigate(['/carshare', carShare.id, 'trips']);
  }

  newCarShare(): void {
    this.router.navigate(['/carshare/new']);
  }

}
