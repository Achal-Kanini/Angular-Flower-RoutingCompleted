import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from 'Models/ICustomer';
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
          localStorage.setItem("custmid",this.customer.id.toString());
          localStorage.setItem("userType",this.customer.vendor);
        // console.log(this.customer);

        this.router.navigate(['/flower']);

      })
  }

}
