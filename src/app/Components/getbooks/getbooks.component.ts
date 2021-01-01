import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  constructor() { }

  booksArray=[]
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
  
}

review() {
  return Math.floor(Math.random() * (5 - 1) + 1)
}
}