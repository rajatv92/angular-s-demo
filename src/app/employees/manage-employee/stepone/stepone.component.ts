import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../../employees.service';


@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css']
})
export class SteponeComponent implements OnInit {
  addEmployeeForm: NgForm;
  @Output() isSubmitted = false;
  @Output() stepCompleted = new EventEmitter<String>();

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(
      employees => {
        console.log(employees);
      }
    )
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.employeesService.createEmployee(form.value)
      .subscribe(responseDate => {
        console.log(responseDate);
      });

    this.isSubmitted = true;
    this.stepCompleted.emit('one');
  }
}
