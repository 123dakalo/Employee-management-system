import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{

  id: number=0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.employee = new Employee();

    this.id = +this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe(data=>{
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.updateEmployee();
  }
}
