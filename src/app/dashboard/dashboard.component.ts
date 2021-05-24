import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//dAccno="";
dPswd="";
dAmount="";
wAccno="";
wPswd="";
wAmount=""
depositForm=this.fb.group({
  dAccno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  dPswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  dAmount:['',[Validators.required,Validators.pattern('[0-9]*')]]

})
withdrawForm=this.fb.group({
  wAccno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  wPswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wAmount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

user=this.dataService.currentUser;

  constructor(private dataService:DataService,private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {
  }
deposit(){
  if(this.depositForm.valid){//call deposit function line 48 to 55
    var accno=this.depositForm.value.dAccno;
  var pswd=this.depositForm.value.dPswd
  var amount=this.depositForm.value.dAmount;
  const result=this.dataService.deposit(accno,pswd,amount)
  if(result)
  {
    alert("the given amount is"+amount+"credited and new balance is"+result)
  }
  }
  //alert("Amount Credited")
  //var accno=this.dAccno;
  //var pswd=this.dPswd;
  //var amount=this.dAmount;
  //var accno=this.depositForm.value.dAccno;
  //var pswd=this.depositForm.value.dPswd;
  //var amount=this.depositForm.value.dAmount;
  //const result=this.dataService.deposit(accno,pswd,amount)
  //if(result)
 // {
    //alert("the given amount is"+amount+"credited and new balance is"+result)
  //}
  else{
    alert("Invalid Form")
  }
}
withdraw(){
  if(this.withdrawForm.valid)
  //valid copy 82 to 91 lines
  {
    var accno=this.withdrawForm.value.wAccno;
  var pswd=this.withdrawForm.value.wPswd;
  var amount=this.withdrawForm.value.wAmount;

  const result=this.dataService.withdraw(accno,pswd,amount)
  if(result)
  {
    alert("the given amount is"+amount+"debited and new balance is"+result)
  }
}
else{
  alert("Invalid Form")
}
  }
  //var accno=this.wAccno;
 // var pswd=this.wPswd;
  //var amount=this.wAmount;
  //var accno=this.withdrawForm.value.wAccno;
  //var pswd=this.withdrawForm.value.wPswd;
  //var amount=this.withdrawForm.value.wAmount;

  //const result=this.dataService.withdraw(accno,pswd,amount)
  //if(result)
  //{
    //alert("the given amount is"+amount+"debited and new balance is"+result)
  //}
//}
}
