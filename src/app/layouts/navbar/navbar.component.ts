import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

import {AuthService} from '@app/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  version = environment.version;
  navItems = [
    
  ];

  constructor(private authService : AuthService) { }

  public userAuth = null;
  ngOnInit() {
    this.userAuth = this.authService.getUserAuth();
  }

  logout(){
    
  }

}
