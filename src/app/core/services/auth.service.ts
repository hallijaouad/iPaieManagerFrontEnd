import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


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
    return true;
    if (res.token_access){
      localStorage.setItem("token_access", res.token_access);
      this.router.navigate(['/salaries']);
      return false;
    }
    return true;
  }
  getToken() {
    return true;
    const helper = new JwtHelperService();
    const token_access = localStorage.getItem("token_access");
    const isExpired = helper.isTokenExpired(token_access);
    if(isExpired){
      return false;
    }
    return token_access;
  }
  removeToken() {
    return localStorage.removeItem("token_access");
  }

  getUserAuth(){
    return "halli";
    /*const helper = new JwtHelperService();
    const token_access = this.getToken();
    if(token_access){
      const decodedToken = helper.decodeToken(token_access);
      console.log(decodedToken)
      return decodedToken.user;
    }
    return null;*/
  }

}
