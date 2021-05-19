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
    const result=this.dataService.login(acno,pswd)
    if(result)
    {
      alert("login sucessful")
        this.router.navigateByUrl("dashboard")
    }
  }

register(){
  this.router.navigateByUrl("register")
}

}
