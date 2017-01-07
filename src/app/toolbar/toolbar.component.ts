import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router }   from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'Car Share';

  constructor(
    private titleService: Title,
    private router: Router) {}

  ngOnInit() {
    this.title = this.titleService.getTitle();
  }

  changeTeam(): void {
    this.router.navigate(['/carshares']);
  }

}
