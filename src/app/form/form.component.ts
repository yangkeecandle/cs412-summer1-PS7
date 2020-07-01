import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {WxServiceService as WxService} from "../wx-service.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  names = this.http.get<any[]>('http://localhost:4201');
    constructor(private http: HttpClient) {
    }

    post() {
      const response this.http.post('http://localhost:4201/users'')
    }

  currentWeather = {
    temperature: 0,
    pressure: 0,
    humidity: 0
  };

  city: string;

  weatherForm = this.form.group({
    cityControl: ['boston', Validators.required],
    unitsControl: [''],
    subform: this.form.group({
      detail: ['']
    })
  })

  constructor(private wxService: WxService, private form: FormBuilder) {}


  getWeather() {
    this.wxService.getWeatherForm(this.weatherForm).subscribe(
      response => {
        this.currentWeather = response['main'];
        this.currentWeather = {
          temperature: response['main']['temp'],
          pressure: response['main']['pressure'],
          humidity: response['main']['humidity'],
        }

      }
    );
  }
  ngOnInit(): void {
  }
}
