import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router }   from '@angular/router';
import { CarShare } from '../../car-share';
import { DataStoreService } from '../../data-store.service';

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
    private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.getCarShares();
    this.titleService.setTitle("Car Shares");
  }

  getCarShares(): void {
    this.dataStoreService.query(CarShare, {
      include: 'trips'
    }).subscribe(
      (carShares: CarShare[]) => this.setCarShares(carShares)
    );
  }

  setCarShares(carShares: CarShare[]) {
    this.carShares = carShares;
  }

  onSelect(carShare: CarShare): void {
    this.router.navigate(['/carshare', carShare.id, 'trips']);
  }

  newCarShare(): void {
    this.router.navigate(['/carshare/new']);
  }

}
