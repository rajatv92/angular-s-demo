import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  // employees: Employee [] = [
  //   new Employee('Rajat Verma','rvrajat084@gmail.com','Senior Software Engineer'),
  //   new Employee('Joe Biden','joe@gmail.com','Engineering Director'),
  //   new Employee('Donald Trump','trump@gmail.com','Senior Vice Precident'),
  //   new Employee('Xi Jinping','xi@gmail.com','Chief Sales Officer'),
  //   new Employee('Mohammad Bin Salman (MBS)','mbs@gmail.com','Chief Revenue Officer'),
  // ];

  employees: Employee [];
  showLoader: boolean = true;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(employeeData => {

      this.employees = employeeData;
      this.showLoader = false;
    })
  }

}
