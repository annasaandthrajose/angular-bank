import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname="";
acno="";
pswd="";
registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})
  constructor(private dataService:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register()
{
  console.log(this.registerForm.get('uname')?.errors);
  if(this.registerForm.get('uname')?.errors)
  {
    alert("Username Required")
  }
  
  if(this.registerForm.valid)
  {
    alert("Form valid")
    var uname=this.registerForm.value.uname;
  var acno=this.registerForm.value.acno;
  var pswd=this.registerForm.value.pswd;
  const result=this.dataService.register(uname,acno,pswd)
  if(result){
    alert("Registration Sucessful");

  this.router.navigateByUrl("")
  }
  else{
    alert("User Exists...Please Login")
  }
}
  
  else{
    alert("Invalid Form")
  }
  //console.log(this.registerForm);//string with no of object,this contain user output field
  
  //alert("Register Clicked")
  //var uname=this.uname;
  //var acno=this.acno;
  //var pswd=this.pswd;
  //console.log(uname,acno,pswd);  empty string
  //var uname=this.registerForm.value.uname;
  //var acno=this.registerForm.value.acno;
  //var pswd=this.registerForm.value.pswd;
  //console.log(uname,acno,pswd);//output object with user entered field values
  
  //const result=this.dataService.register(uname,acno,pswd)
  //if(result){
    //alert("Registration Sucessful");

  //this.router.navigateByUrl("")
 // }
  //else{
    //alert("User Exists...Please Login")
 // }
}
}
