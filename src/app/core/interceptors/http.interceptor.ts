import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, empty } from 'rxjs';
import { map, catchError, tap, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SharedModule } from '@app/shared';
import { AppMessageData } from '../../shared/components/dialogs/app-message-dialog/app-message-data';
import { AppMessageDialogComponent } from '../../shared/components/dialogs/app-message-dialog/app-message-dialog.component';
import { SpinnerService } from './../services/spinner.service';

@Injectable({ providedIn: 'root' })

export class HttpGlobalInterceptor implements HttpInterceptor {
  private counter: number = 0;
  constructor(private router: Router, private spinnerService: SpinnerService, private dialog: MatDialog) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.counter++;
    if (this.counter === 1) {
      this.spinnerService.show();
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        // Reset the timer ..
        // if (this._idleTimeoutSvc) {
        //  this._idleTimeoutSvc.startTimer();
        // }
        if (event instanceof HttpResponse) {
          this.counter--;
          if (this.counter === 0) {
            this.spinnerService.hide();
          }
          switch (event.status) {
            case 200: // recupération and update ressource
            case 201: // Create ressoures
            case 204: // delete ressourec
              if (event.body && event.body.message) {
                this.onMessageInfo(event.body.message);
              }
              break;
          }

        }
      }),
      catchError((err: any) => {
        this.counter--;
        if (this.counter === 0) {
          this.spinnerService.hide();
        }


        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            // Not valid token or auth invalid
            case 401:
             case 403:
              localStorage.removeItem('token_access');
              localStorage.clear();
              this.router.navigate(['auth']);
              break;

            // invalide data
            case 422:
              this.onErrorValidation(err);
              break;
            default:
              this.onErrorMessage(err);
              break;
          }
        }

        return throwError(err);
      }),
      finalize(() => {
        // this.counter--;
        // this.turnOffModal();


      })
    );
  }

  private onErrorMessage = (error: any) => {
    console.log(error)
    const message = new AppMessageData('Erreur : ', error.message, 'error_outline', 'error');
    this.dialog.open(AppMessageDialogComponent, { data: message });
  }

  private onErrorValidation = (err: any) => {
    console.log(err)
    /*const errors = err.error.error_description;
    let msg = '';
    Object.keys(errors).forEach(key => {
      msg += errors[key][0] + '\n';
    });*/
    //const message = new AppMessageData('Erreur : ' + err.error.error, msg, 'error_outline', 'error');
    //this.dialog.open(AppMessageDialogComponent, { data: message });
  }

  private onMessageInfo = (messageInfo: any) => {
    //const message = new AppMessageData(messageInfo.title ? messageInfo.title : 'O2S', messageInfo.message, 'done', 'success');
    //this.dialog.open(AppMessageDialogComponent, { data: message });
  }
}
