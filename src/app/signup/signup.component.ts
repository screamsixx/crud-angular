import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el módulo Router
import { ClienteService } from '../services/ClienteService';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, // Inyecta el servicio Router
    private serviciocliente: ClienteService
  ) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      return;
    }

    const cliente: Cliente = {
      nombre: this.registroForm.value.nombre,
      apellidos: this.registroForm.value.apellidos,
      direccion: this.registroForm.value.direccion,
      email: this.registroForm.value.email,
      password: this.registroForm.value.password,
      clienteID: 0,
    };

    this.serviciocliente.insertCliente(cliente).subscribe((res) => {
      console.log(res);
      if(res.message==='Cliente insertado correctamente'){
        alert("Felicidades, ya puedes iniciar sesión!");
        this.router.navigate(['/login']); // Navega al componente Login
      }else{
        alert("Error, intenta de nuevo!");
      }
      
    });
  }
}
