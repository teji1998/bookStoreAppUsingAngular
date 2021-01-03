import { Injectable } from '@angular/core';
import {HttpserviceService} from '../HttpService/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private httpService : HttpserviceService) { }
  getBook() {
    return this.httpService.get('bookstore_user/get/book');
  }
}
