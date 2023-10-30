import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tokendata } from '../interfaces/tokendata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7200/api/v1/Usuario';

  constructor(private http: HttpClient) { }

login(email: string, password: string): Observable<Tokendata> {
  const url = `${this.baseUrl}/Login`;
  const body = { email: email, password: password };
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  return this.http.post<Tokendata>(url, body, { headers: headers });
}

}
