import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private dataService:DataService) { }
aim="Your Perfect Bankig Partner"
acno="Account Number Please"
pswd="";





  ngOnInit(): void {
  }
  
  login()
  {
    var acno=this.acno;
    console.log(acno);
    
    var pswd=this.pswd;
    let users=this.dataService.accountDetails
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

register(){
  this.router.navigateByUrl("register")
}

}
