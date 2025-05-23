import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }
  ngOnInit(){

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(["/employees"])
  }

  onSubmit(){
    this.saveEmployee();
  }

}
