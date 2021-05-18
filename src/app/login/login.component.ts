import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
aim="Your Perfect Bankig Partner"
acno="Account Number Please"
pswd="";

accountDetails:any={
  1000:{acno:1000,name:"userone",balance:50000,password:"user1"},
  1001:{acno:1002,name:"usertwo",balance:5000,password:"user2"},
  1002:{acno:1003,name:"userthree",balance:10000,password:"user3"},
  1003:{acno:1004,name:"userfour",balance:6000,password:"user4"}
  

  }




  ngOnInit(): void {
  }
  
  login()
  {
    var acno=this.acno;
    console.log(acno);
    
    var pswd=this.pswd;
    let users=this.accountDetails
    if(acno in users)
    {
      if(pswd==users[acno]["password"])
      {
        alert("login sucessful")
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("invalid account")
    }
  }



}
