import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private apiService: ApiService, private router: Router) { }

  login(cur){
    return this.apiService.post("auth", cur)
  }

  logout(): Observable<boolean> {
    return of(false);
  }

  storeToken(res) {
    console.log(res.token)

    if (res.token){
      localStorage.setItem("token", res.token);
      this.router.navigate(['']);
    }
  }
  getToken() {
    return localStorage.getItem("token");
  }
  removeToken() {
    return localStorage.removeItem("token");
  }

}
