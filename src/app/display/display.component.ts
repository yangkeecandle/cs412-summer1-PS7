import { Component, Input } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {WxServiceService as WxService} from "../wx-service.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input()
  currentWeather = {
    temperature: 0,
    pressure: 0,
    humidity: 0
  };
  @Input()
  weatherForm = this.form.group({
    cityControl: [],
    unitsControl: [],
    subform: this.form.group({
      detail: []
    })
  })

  constructor(private wxService: WxService, private form: FormBuilder) {}

  @Input()
  getWeather() {
    this.wxService.getWeatherForm(this.weatherForm).subscribe(
      response => {
        this.currentWeather = response[''];
        this.currentWeather = {
          temperature: response[''][''],
          pressure: response[''][''],
          humidity: response[''][''],
        }

      }
    );
  }

}



