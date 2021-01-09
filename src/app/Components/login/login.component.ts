import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserserviceService} from '../../Services/UserService/userservice.service';
//import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true
  loginForm!: FormGroup;
  token:any;

  constructor(private router:Router,private userservice:UserserviceService,
    private formBuilder:FormBuilder) { }

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
    this.userservice.login(reqData).subscribe((response:any)=>{
      console.log("login sucessfull",response['token']);
      localStorage.setItem('token',response['token']);
      this.router.navigate(['dashboard'])
    })
    
  }

}
