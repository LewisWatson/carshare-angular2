import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carshare-detail',
  templateUrl: './carshare-detail.component.html',
  styleUrls: ['./carshare-detail.component.css']
})
export class CarshareDetailComponent implements OnInit {

   constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Car Share');
  }

}
