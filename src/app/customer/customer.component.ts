import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from 'Models/ICustomer';
import { jwtcustomer } from 'Models/jwtcustomer';
import { LoginServService } from '../Service/login-serv.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  phone: string = "";
  password: string = "";
  vendor: string = "";

  customer : ICustomer = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
    vendor: "",
    password: ""
  }

  jwtcust : jwtcustomer={
    phone :"",
    password:"",
  }
  token:string=""
  constructor(private router: Router, private obj: LoginServService) { }


  ngOnInit(): void {
    // this.getid_api();
  }

  
  getid_loginapi(tempPhone:string, tempPass:string ,tempType:string):void
  {

    // this.flag=true;

//    console.log(tempPhone);

    this.obj.loginMethod(tempPhone, tempPass, tempType).subscribe(data=>
      {
        this.customer = data;
        this.jwtcust.phone = this.customer.phone;
        this.jwtcust.password = this.customer.password;
        this.obj.getToken(this.jwtcust).subscribe(data=>{
          this.token = data;
          localStorage.setItem("jwt",this.token);  
          console.log(this.token);  
        })

        localStorage.setItem("custmid",this.customer.id.toString());
        localStorage.setItem("userType",this.customer.vendor);

        this.router.navigate(['/flower']);
      })
  }

}
