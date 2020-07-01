import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = "http://api.openweathermap.org/data/2.5/weather?q="
  myApiKey = '1e6736f326cbcfb5d6ea5c4ab8142d1c'
  constructor(private http: HttpClient) { }


  getWeather(city: string, units: string = 'imperial') {
    console.log(`in getWeatherByCity `)
    return this.http.get(this.baseURL + city + '&units=' + units + '&appid=' + this.myApiKey);

  }
  getWeatherForm(form: FormGroup) {
    console.log(`in getWeatherByCity `)
    let city = form.value.cityControl;
    let units = form.value.unitsControl;
    return this.http.get(this.baseURL + city + '&units=' + units + '&appid=' + this.myApiKey);

  }
}
