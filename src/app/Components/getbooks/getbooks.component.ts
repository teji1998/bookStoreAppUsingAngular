import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../Services/BookService/bookservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  constructor(private bookService : BookserviceService ,private router:Router) { }

  //booksArray=[]
  booksArray: Array<any> = [];


  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getBook().subscribe((response)=>{
      console.log(response);
      this.booksArray=response['result']
      console.log(" books array " ,this.booksArray);
    })
}
addcart(){
  this.router.navigate(['mycart']);

}

review() {
  return Math.floor(Math.random() * (5 - 1) + 1)
}

}