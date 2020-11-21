import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {
  addEmployeeForm: NgForm;
  secondStepLoaded =false;
  firstStepLoaded= true;
  stepSubmitted :string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(step:string) {
    console.log("Step "+step+" submitted");
    this.stepSubmitted = step;
    if(step == 'one') {
      this.firstStepLoaded = false;
      this.secondStepLoaded = true;
    }
  }

  onSwitch(stepLoaded:string) {
    console.log(stepLoaded+"Listner");
    if(stepLoaded == '1') {
      this.secondStepLoaded = false;
      this.firstStepLoaded = true;
    }
    
    if(stepLoaded == '2') {
      this.firstStepLoaded = false;
      this.secondStepLoaded = true;
      
    }
  }

}
