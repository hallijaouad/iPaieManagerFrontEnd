import { Component, OnInit } from '@angular/core';
import { User, UserService } from '@app/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormUserComponent } from './user-form/form-user.component';


@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  user: User = new User();
  constructor(
    private usersService: UserService,
    public userModal: MatDialog
  ) { }

  ngOnInit() {

  }

  // liste des utilisateurs
  getUsers() {
    //this.usersService.getUsers().subscribe(res => this.users = res);
  }
  /**
   * Modal de mise à jour des utilisateurs
   * @param number pk_utilisateur
   */
  doGetUserModal(pk_utilisateur: number) {
    const userModalRef = this.userModal.open(FormUserComponent, {
      width: '600px',     
      data: {
        pk_utilisateur: pk_utilisateur
      }
    });
    userModalRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }

}
