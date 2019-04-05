import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  version = environment.version;
  navItems = [
    { link: '/dashboard', title: 'Dashboard' },
    { link: '/salaries', title: 'Salaries' }    
  ];
  
  constructor() { }

  ngOnInit() {

  }

}
