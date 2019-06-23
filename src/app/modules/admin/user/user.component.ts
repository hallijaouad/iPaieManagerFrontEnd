import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UserService } from '@app/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserFormComponent } from './user-form/form-user.component';
import { UserGridComponent } from './user-grid/user-grid.component';


@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild(UserGridComponent)
  private userGrid: UserGridComponent;
  users: User[] = [];
  user: User = new User();
  constructor(
    private usersService: UserService,
    public userModal: MatDialog
  ) { }

  ngOnInit() {

  }

  refreshDataGrid() {
    this.userGrid.getUsers();
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
    const userModalRef = this.userModal.open(UserFormComponent, {
      width: '600px',
      data: {
        pk_utilisateur: pk_utilisateur
      }
    });
    userModalRef.afterClosed().subscribe(result => {
      this.refreshDataGrid();
    });

  }

}
