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

  login(cur){
    return this.apiService.post("auth", cur);
  }

  logout(): Observable<boolean> {
    return of(false);
  }

  getToken() {
    return this.getToken;
  }

}
