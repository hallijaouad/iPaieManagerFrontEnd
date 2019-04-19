import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {  
      console.log(this.authService.getToken())   
      if (this.authService.getToken()) {   
        this.router.navigate(['']);      
        return false;
      } else {
        return true;
      }
    }

}
