import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


import { AuthService } from '@app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  isLoading: boolean;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  get f () {
    return this.loginForm.controls;
  }

  /**
   * Authentification
   */
  login() {
    this.isLoading = true;
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe(res => this.validateProccessAuth(res));
  }

  /**
   * Feedback àprés l'authentification 
   * @param res 
   */
  validateProccessAuth(res){
    // si token est valide
    if (res.token){
      this.authService.storeToken(res)
    }else{
      this.isLoading = false;
    }
    
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
