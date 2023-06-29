import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloServiceService {
  private baseUrl = 'https://localhost:7200/api/v1/Articulo';
  constructor(private http: HttpClient) { }
  
  getArticulos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetArticulos`);
  }

  insertArticulo(articulo: Articulo): Observable<any> {
    const url = `${this.baseUrl}/InsertArticulos`;
    return this.http.post(url, articulo);
  }
  deleteArticulobyID(articulo: Articulo): Observable<any> {
    const url = `${this.baseUrl}/DeleteArticuloByID`;
    return this.http.post(url, articulo);
  }
  getProductosById(articuloID: number): Observable<any> {
    const url = `${this.baseUrl}/GetProductosById?articuloID=${articuloID}`;
    return this.http.get(url);
  }
  updateArticulo(articulo: Articulo): Observable<any> {
    const url = `${this.baseUrl}/UpdateArticulo`;
    return this.http.post(url, articulo);
  }

}