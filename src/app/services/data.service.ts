import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any={
    1000:{acno:1000,name:"userone",balance:50000,password:"user1"},
    1001:{acno:1002,name:"usertwo",balance:5000,password:"user2"},
    1002:{acno:1003,name:"userthree",balance:10000,password:"user3"},
    1003:{acno:1004,name:"userfour",balance:6000,password:"user4"}
    
  
    }
  
  constructor(private router:Router) { }

  register(uname:any,acno:any,pswd:any){
    let user=this.accountDetails;
    if(acno in user)
    {
      return false;
      
    }
    else{
      user[acno]={
        acno,
        username:uname,
       password:pswd,
        balance:0
      }
      return true;
      
    }
  }
  login(acno:any,pswd:any)
  {
    let users=this.accountDetails
    if(acno in users)
    {
      if(pswd==users[acno]["password"])
      {
        return true;
        
      }
      else{
        alert("incorrect password")
        return false;
      }
    }
    else{
      alert("invalid account")
      return false;
    }
  
  }
  deposit(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let user=this.accountDetails;
    if(acno in user)
    {
      if(pswd=user[acno]["password"])
      {
        user[acno]["balance"]+=amount;
        return user[acno]["balance"]
      }
      else{
        alert("Incorrect Password")
        return false;
      }
    }
    else{
      alert("Invalid Account")
      return false;
    }
  }
  withdraw(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let user=this.accountDetails;
    if(acno in user)
    {
      if(pswd=user[acno]["password"])
      {
        if(user[acno]["balance"]>amount){
          user[acno]["balance"]-=amount;
        return user[acno]["balance"]
        }
       else{
         alert("Insufficient balance")
         return false;
       }
      }
      else{
        alert("Incorrect Password")
        return false;
      }
    }
    else{
      alert("Invalid Account")
      return false;
    }
  }
}
