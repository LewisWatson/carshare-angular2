/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarshareListComponent } from './carshare-list.component';

describe('CarshareListComponent', () => {
  let component: CarshareListComponent;
  let fixture: ComponentFixture<CarshareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarshareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarshareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
