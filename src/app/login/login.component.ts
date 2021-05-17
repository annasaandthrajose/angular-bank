import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
aim="Your Perfect Bankig Partner"
accno="Account Number Please"
pswd="";

accountDetails:any={
  1000:{acno:1000,name:"userone",balance:50000,password:"user1"},
  1001:{acno:1002,name:"usertwo",balance:5000,password:"user2"},
  1002:{acno:1003,name:"userthree",balance:10000,password:"user3"},
  1003:{acno:1004,name:"userfour",balance:6000,password:"user4"}
  

  }




  ngOnInit(): void {
  }
  accchange(event:any){
    this.accno=event.target.value;
    console.log(this.accno);
    
  }
  pswdchange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }
  login()
  {
    var acno=this.accno;
    var pswd=this.pswd;
    let users=this.accountDetails
    if(acno in users)
    {
      if(pswd==users[acno]["password"])
      {
        alert("login sucessful")
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
