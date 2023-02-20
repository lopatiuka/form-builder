import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const contentTypeReq = req.clone({ setHeaders: { 'Content-Type': 'application/json' } });
    return next.handle(contentTypeReq);
  }
}