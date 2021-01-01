import { Injectable } from '@angular/core';
import {HttpserviceService} from '../HttpService/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpserviceService) { }
  
  registration(data: any){
    console.log("data in user service",data);
    return this.http.post('bookstore_user/registration',data);
  }
  
  login(data:any){
    console.log("data in user service",data);
    return this.http.post('bookstore_user/login',data);
  }
}

