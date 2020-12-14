import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee = new Employee();
  msg = '';
  // tslint:disable-next-line:variable-name
  constructor(private _service: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  loginUser(){
    this._service.loginEmployeeFromRemote(this.employee).subscribe(
      data => {
        console.log('Resposta recebida');
        this._router.navigate(['/loginsuccess']);
      },
      erro => {
        console.log('exceção ocorreu');
        this.msg = 'Credenciais incorretas, insira uma email e uma senha válidos';
      }
    );
  }
  // tslint:disable-next-line:typedef
  gotoregistration(){
    this._router.navigate(['/create-employee']);
  }
}
