import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from '../interfaces/carrito';
import { Detallecarrito } from '../interfaces/detallecarrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {
  private baseUrl = 'https://localhost:7200/api/v1/Carrito';
  constructor(private http: HttpClient) { }

  insertCarrito(carrito: Carrito): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/InsertCarrito`, carrito);
  }
  
  getCarritoByClienteID(clienteId: number): Observable<any> {
    const url = `${this.baseUrl}/GetCarritoByClienteID?id=${clienteId}`;
    return this.http.get(url);
  }


  sumarCantidadCarrito(detallecarrito: Detallecarrito): Observable<any> {
    const url = `${this.baseUrl}/SumarCantidadCarrito`;
    return this.http.post(url, detallecarrito);
  }
  restarCantidadCarrito(detallecarrito: Detallecarrito): Observable<any> {
    const url = `${this.baseUrl}/RestarCantidadCarrito`;
    return this.http.post(url, detallecarrito);
  }

}
