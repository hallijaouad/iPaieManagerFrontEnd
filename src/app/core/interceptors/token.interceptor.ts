import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
//import { Observable } from 'rxjs/Observable';
import { Observable, of, empty } from 'rxjs';

@Injectable( {providedIn: 'root'})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/vnd.api+json',
          'Authorization': `Bearer ${this.authService.getToken()}`
        }
      });     
      return next.handle(request);
    }
}

