import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private apiService: ApiService) { }

  login(cur): Observable<User> {
    return this.apiService.post("login", cur);
  }

  logout(): Observable<boolean> {
    return of(false);
  }

  getToken() {
    return this.getToken;
  }

}
