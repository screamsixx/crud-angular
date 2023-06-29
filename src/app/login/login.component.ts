import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/ClienteService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
cliente:any=[];
  constructor(
    private servicioclientes:ClienteService,
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
    //consultar el usuario
    this.servicioclientes.login(email,password).subscribe(res=>{
      this.cliente=res;
      console.log(res);
      console.log(this.cliente[0].email);
      localStorage.setItem('email', this.cliente[0].email); //a partir de aqui ya tendría acceso
      this.router.navigate(['/dashboard']);//redireccionar al inicio

  });
  }

}
