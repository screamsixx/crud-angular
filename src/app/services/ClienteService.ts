import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'https://localhost:7200/api/v1/Cliente';
  

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetClientes`);
  }

  insertCliente(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.baseUrl}/InsertClientes`, cliente);
  }

  updateCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/UpdateCliente`, cliente);
  }

  //estoy consiente de que no debo enviar credenciales por texto sin encriptar
  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/Login?email=${email}&password=${password}`;
    return this.http.post(url, {}, { responseType: 'json' });
  }

  
}
