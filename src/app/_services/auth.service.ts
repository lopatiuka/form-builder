import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormItem } from '../interfaces/form-item.interface';
import { Payload } from '../interfaces/payload.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(body: any, register: boolean) {
    let path = register ? 'users' : 'login';
    let result = this.http.post(`http://localhost:3000/${path}`, body);
    return result
  }
}