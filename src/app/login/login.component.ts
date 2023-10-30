import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/ClienteService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { Router } from '@angular/router';
import { Tokendata } from '../interfaces/tokendata';
import { AuthService } from '../services/Auth.service';
import { ToastrService } from 'ngx-toastr';

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
    // Realizar el inicio de sesión
    this.servicioAuth.login(email, password).subscribe(
      (res) => {
        // Manejar la respuesta exitosa
        this.token = res;
        console.log(res);
        localStorage.setItem('email', this.token.email); // Almacena el correo en el almacenamiento local
        localStorage.setItem('token', this.token.token); // Almacena el token en el almacenamiento local
        localStorage.setItem('id', this.token.id); // Almacena el token en el almacenamiento local
        this.router.navigate(['/dashboard']); // Redireccionar al dashboard
      },
      (error) => {
        // Manejar el error
        console.error('Ocurrió un error al iniciar sesión:', error);
        // Puedes mostrar un mensaje de error al usuario o realizar otras acciones aquí
      }
    );
  }
}
