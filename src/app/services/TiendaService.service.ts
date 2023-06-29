import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiendaServiceService {
  private baseUrl = 'https://localhost:7200/api/v1/Tienda';

  constructor(private http: HttpClient) {}
  getTiendas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetTiendas`);
  }
}
