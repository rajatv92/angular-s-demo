import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Output() stepSelected = new EventEmitter<String>();
  @Input() stepStatus:boolean;
  @Input() formState = 'Zero';

  onStepOne = true;
  onStepTwo = false;
  onStepThree = false
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.formState}`);
    if(this.formState == 'one') {
      this.onStepOne = false;
      this.onStepTwo = true;
      this.onStepThree = false;

    }
  }

  onSelect(step: string) {
    if(step == '1') {
      this.onStepOne = true;
      this.onStepTwo = false;
      this.onStepThree = false;
    } else if(step == '2') {
      this.onStepOne = false;
      this.onStepTwo = true;
      this.onStepThree = false;
    } else {
      this.onStepOne = false;
      this.onStepTwo = false;
      this.onStepThree = true;
    }
    this.stepSelected.emit(step);
  }

}
