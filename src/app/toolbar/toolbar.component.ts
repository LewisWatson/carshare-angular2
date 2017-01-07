import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'Car Share';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.title = this.titleService.getTitle();
  }

}
