import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  token:any;
  baseUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }
  
  postCart(url: string,data: any){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    this.token = localStorage.getItem('token')
    console.log("getting token ", this.token);
    console.log("url is:",this.baseUrl +url);
    console.log("data in http",data);
    return  this.http.post(this.baseUrl +url ,data,options)
  }

  post(url: string,data: any){
    console.log("url is:",this.baseUrl +url);
    console.log("data in http",data);
    return  this.http.post(this.baseUrl +url ,data)

    }

  /*get(url: string) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }*/
   /* this.token = localStorage.getItem('token')
    console.log("getting token ", this.token);
    console.log("options in httpservice ", options);
    return this.http.get(this.baseUrl + url, options);
  }*/
  
  get(url: string) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    this.token = localStorage.getItem('token');
    console.log("getting token ", this.token);
    console.log("options in httpservice ", options);
    return this.http.get(this.baseUrl + url, options);
  }
}

