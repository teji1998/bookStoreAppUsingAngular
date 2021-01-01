import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }
  
  post(url: string,data: any){
    console.log("url is:",this.baseUrl);
    console.log("data in http",data);
    return  this.http.post(this.baseUrl +url ,data)
  }
}

