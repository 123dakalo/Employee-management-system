import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements  OnInit{

  id: number =0
  employee: Employee = new Employee()

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee()
    this.employeeService.getEmployee(this.id).subscribe(data =>{
      this.employee = data;
    });
  }

}
