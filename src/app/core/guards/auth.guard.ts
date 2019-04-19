import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {         
      if (this.authService.getToken()) {       
        return true;
      }else{     
        this.router.navigate(['login']);  
        return false;
      }
    }
}
