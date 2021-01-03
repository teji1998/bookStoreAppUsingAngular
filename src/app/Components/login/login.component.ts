import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserserviceService} from '../../Services/UserService/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title='Book Store Registration'
  hide=true
  loginForm!: FormGroup;

  constructor(private router:Router,private userservice:UserserviceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(loginform:any) {
    let reqData = {
      email: loginform.email,
      password: loginform.password

    }
    console.log(reqData);
    this.userservice.login(reqData).subscribe((response)=>{
      console.log("login sucessfull",response)
      this.router.navigate(['dashboard'])
    })
    
  }

}
