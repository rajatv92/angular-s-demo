import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { NgForm } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeesService {

    constructor(private http: HttpClient) { }

    createEmployee(formValues: NgForm) {
        return this.http.post('https://ang-sampleapp.firebaseio.com/employees.json', formValues);
    }

    getEmployees() {
      return this.http.get('https://ang-sampleapp.firebaseio.com/employees.json').pipe(
            map(responseDate => {
                const employeesArray = [];
                for (const key in responseDate) {
                    if (responseDate.hasOwnProperty(key)) {
                        console.log(key);
                        employeesArray.push({ ...responseDate[key], id: key })
                    }
                }
                return employeesArray;
            })
        )
    }
}