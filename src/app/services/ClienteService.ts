import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';
import { Tokendata } from '../interfaces/tokendata';
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


}
