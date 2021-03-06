import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//dacno="";
//dpswd="";
//damount="";
//wAccno="";
//wPswd="";
//wAmount=""
depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

})
withdrawForm=this.fb.group({
  wAccno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  wPswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wAmount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

user:any;
acno:any;
lDate:Date=new Date()

  constructor(private dataService:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }
deposit(){
  if(this.depositForm.valid){//call deposit function line 48 to 55
    var accno=this.depositForm.value.acno;
  var pswd=this.depositForm.value.pswd
  var amount=this.depositForm.value.amount;
  this.dataService.deposit(accno,pswd,amount)
  .subscribe((result:any)=> {
    if (result) {
      alert(result.message);

      //this.router.navigateByUrl("") //no need to navigate

    }
  },
    (result) => {
      alert(result.error.message)
    })
 // if(result)
  //{
    //alert("the given amount is"+amount+"credited and new balance is"+result)
 // }
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

  this.dataService.withdraw(accno,pswd,amount)
  .subscribe((result:any)=> {
    if (result) {
      alert(result.message);

      //this.router.navigateByUrl("") //no need to navigate

    }
  },
    (result:any) => {
      alert(result.error.message)
    })
  }
//   if(result)
//   {
//     alert("the given amount is"+amount+"debited and new balance is"+result)
//   }
// }
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
onDelete(event:any){
this.dataService.deleteAccDetails(event)
.subscribe((result:any)=>{
  if(result){
alert(result.message)
this.router.navigateByUrl("")
  }
},
(result:any)=>{
  alert(result.error.message)
})
}
onCancel(){
  this.acno=""
}
deleteAcc(){
  this.acno=localStorage.getItem("acno")
}

}
