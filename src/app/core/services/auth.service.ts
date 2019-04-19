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
    if (res.token){
      localStorage.setItem("token", res.token);
      this.router.navigate(['']);
    }    
  }
  getToken() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem("token");    
    const isExpired = helper.isTokenExpired(token);
    if(isExpired){
      return false;
    }
    return token;    
  }
  removeToken() {
    return localStorage.removeItem("token");
  }

  getUserAuth(){
    const helper = new JwtHelperService();
    const token = this.getToken();
    if(token){
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      return decodedToken.sub;
    }   
    return null; 
  }

}
