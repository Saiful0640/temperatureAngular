import { Component } from '@angular/core';
import { TemperatureTsService } from '../services/temperature.ts.service';
import { ToastrService } from 'ngx-toastr';
import { TemperatureResponse } from '../models/temperature-response';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  title:string = 'nasrin Steel';
  tdate: string='';
  time: string='';
  tempereatureObject : TemperatureResponse ={
    temperature: '',
    responseCode: 0,
    responseMessage: ''
  };
  constructor( private tempService: TemperatureTsService, private toastr: ToastrService ){
  }


  temperatureSave(){
      this.tempService.temperatureSave().subscribe((tempsave : any) =>{

          if(tempsave){
            console.log(tempsave);
            this.toastr.success(tempsave.responseMessage,'save successfully')
          }else{
            console.log(tempsave);
          }
      },error=>{
        console.log(error);
        this.toastr.error(error.error.responseMessage,'error')
      } )
  }

  temperatureBydateAndTime(date:string, time:string){

    this.tempService.temperatureGetByTimeAndDate(date,time).subscribe((response:any)=>{

      if(response){

          this.tempereatureObject = response;
          return this.tempereatureObject;
      }
      return;
    },(err:any)=>{
      console.log(err);
    })

  }

  tempByDateAndTime(date:string, time:string){

    this.tempService.temperatureByDateAndTime(date, time).subscribe((tempResponse: any)=>{

      if(tempResponse){
        this.tempereatureObject = tempResponse;
        return this.tempereatureObject;
      }else{
        return;
      }

    },(err:any)=>{
      console.log(err);
    })
  }
}
