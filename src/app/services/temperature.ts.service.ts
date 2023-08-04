import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TemperatureResponse } from '../models/temperature-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureTsService {

  constructor(private http:HttpClient) {

   }

   temperatureSave(){
   return this.http.get(environment.apiBaseUrl+'/fetch/hourly/temp');

   }

   temperatureGetByTimeAndDate(date:string, time:string){

    var params = new HttpParams().set('date', date.toString()).set('time', time.toString());
    return this.http.post(environment.apiBaseUrl+'/fetch/temp/datetime',null,{params});
   }

  //  temperatureGetByTimeAndDates(date:string, time:string){
  //   return this.http.get(environment.apiBaseUrl+'/fetch/temp/datetime/date'+ date +'/time'+ time);
  //  }

  temperatureByDateAndTime(date:string, time:string){

    var params = new HttpParams()
      .set('date', date.toString())
      .set('time', time.toString());

      return this.http.get(environment.apiBaseUrl+'/temperature',{params});
  }
}
