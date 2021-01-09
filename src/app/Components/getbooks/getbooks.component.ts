import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../../Services/BookService/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  constructor(private bookService: BookserviceService, private router: Router) { }

  //booksArray=[]
  booksArray: Array<any> = [];
  wishlist: Array<any> = [];


  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBook().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response['data']
      console.log(" books array ", this.booksArray);
    })
  }
  addcart(book: any) {
    //this.wishlist.push(book);
    //localStorage.setItem('addedcart', JSON.stringify(this.wishlist));
    book.added=false;
  for(let b of this.booksArray){
    if(book.product_id==b.product_id){
      book.added=true;
    }
  }
 this.bookService.AddCart(book).subscribe((res)=>{
   console.log("AddBookSucess",res)
 })
  }

  review() {
    return Math.floor(Math.random() * (5 - 1) + 1)
  }

}