import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ICustomer } from 'Models/ICustomer';
import { ICustomerPost } from 'Models/ICustomerPost';
import { RegisterService } from '../Service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  phone: string = "";

  customer : ICustomerPost = {
    name: "",
    email: "",
    phone: "",
    address: "",
    vendor: "",
    password: ""
  }

  constructor(private router: Router, private obj: RegisterService,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }

  postid_registerapi():void
  {
    

    // console.log(cust);

    // this.flag=true;

    this.customer.phone = this.phone.toString();

     //console.log(this.customer);

    this.obj.registerMethod(this.customer).subscribe(data=>
      {
        // this.customer = data;

        // console.log(this.customer);

        this.router.navigate(['/']);

      })
  }
  
IsAuthendicated():boolean{
  const token:string|null=localStorage.getItem("jwt");
  if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
  {
    return true;
  }
  else
  {
    return false;
  }
}

}
