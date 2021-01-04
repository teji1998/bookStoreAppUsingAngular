import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {DashboardComponent } from './Components/dashboard/dashboard.component';
import {GetbooksComponent} from './Components/getbooks/getbooks.component';
import {OrderComponent} from './Components/order/order.component';
import {MycartComponent} from './Components/mycart/mycart.component';

const routes: Routes = [{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{path:'dashboard',component:DashboardComponent,
children:[
  {path:'',component:GetbooksComponent},
]
},{path:'order',component:OrderComponent},
{path:'mycart',component:MycartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
