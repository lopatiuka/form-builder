import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(body: User, register: boolean) {
    let path = register ? 'users' : 'login';
    let result = this.http.post<string>(`http://localhost:3000/${path}`, body);
    return result
  }
}