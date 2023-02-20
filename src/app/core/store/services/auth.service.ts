import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../shared/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private cLocalhost = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  login(body: User, register: boolean) {
    const route = register ? 'users' : 'login';
    const result = this.http.post<string>(`${this.cLocalhost}${route}`, body);
    return result
  }
}