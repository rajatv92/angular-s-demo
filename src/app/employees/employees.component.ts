import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeList   = 'hide';
  manageEmployee = 'hide';

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(param) {
    if(param == 'list') {
      this.manageEmployee = 'hide';
      this.employeeList = 'show';
    } else if(param == 'manage') {
      this.employeeList = 'hide';
      this.manageEmployee = 'show';
    }
    
  }


}
