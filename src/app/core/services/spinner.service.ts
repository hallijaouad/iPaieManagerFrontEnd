import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  appHttpSpinner = false;
  constructor() { }

  show() {
    this.appHttpSpinner = true;
  }
  hide() {
    this.appHttpSpinner = false;
  }

  getSpinnerState() {
    return this.appHttpSpinner;
  }
}
