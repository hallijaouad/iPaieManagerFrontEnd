import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@app/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {

  }

  /**
   * Fonction permet de controller l'affichage de spiner de download http
   */
  getSpinnerState() {
    return this.spinnerService.getSpinnerState();
  }

}
