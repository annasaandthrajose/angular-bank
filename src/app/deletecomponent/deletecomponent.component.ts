import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-deletecomponent',
  templateUrl: './deletecomponent.component.html',
  styleUrls: ['./deletecomponent.component.css']
})
export class DeletecomponentComponent implements OnInit {
@Input() item:string | null | undefined;
@Output() onDelete=new EventEmitter;
@Output() onCancel=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
delete(){
  alert("deleting..........")
  this.onDelete.emit(this.item)
  
}
cancel(){
  alert("Cancelling....")
  this.onCancel.emit()
}


}
