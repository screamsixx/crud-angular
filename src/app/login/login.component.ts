import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/ClienteService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { Router } from '@angular/router';
import { Tokendata } from '../interfaces/tokendata';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
token:Tokendata;
  constructor(
    private servicioAuth:AuthService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }
  ngOnInit() {//iniciar validaciones reactivas
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    // hacer login
    this.servicioAuth.login(email,password).subscribe(res=>{
      this.token=res;
      console.log(res);
      localStorage.setItem('email', this.token.email); //a partir de aqui ya tendría acceso
      localStorage.setItem('token', this.token.token); //a partir de aqui ya tendría acceso
      this.router.navigate(['/dashboard']);//redireccionar al inicio
  });
  }
}
