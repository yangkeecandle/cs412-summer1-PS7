import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:

   '<app-form></app-form>'
  + '<app-display></app-display>',
    //'<app-display *ngFor = "let currentWeather of currentWeathers"></app-display>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 // currentWeathers = CURRENTWEATHERS;
  constructor() { }

  ngOnInit(): void {
  }

}
