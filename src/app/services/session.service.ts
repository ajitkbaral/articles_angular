import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})


export class SessionService {

  constructor(private http: HttpClient) { }

  getAuthenticationToken(email: string, password: string): Observable<any> {
    const user = {
      email,
      password
    };
    return this.http.post<any>('http://192.168.88.105:3000/api/v1/sessions', user, httpOptions);
  }
}
