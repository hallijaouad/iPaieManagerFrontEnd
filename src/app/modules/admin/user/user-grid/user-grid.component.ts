import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserGridDataSource } from './user-grid-datasource';
import { UserService } from '@app/core';


@Component({
  selector: 'user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserGridDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nom', 'prenom', 'email', 'tel','actif', 'actions'];
  constructor(private usersService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }

  /**
   * All utilisateurs
   */
  getUsers() {
    this.usersService.getAll().subscribe(res => this.setDataSource(res));
  }


  // data for grid
  setDataSource(res) {
    this.dataSource = new UserGridDataSource(res, this.paginator, this.sort);
  }

  /**
   * Suppression d'un utilisateur
   * @param pk_user
   */
  deleteUser (pk_user){
    this.usersService.delete(pk_user).subscribe(res => this.refreshUsersGrid(res));
  }
  refreshUsersGrid(res){
    this.getUsers();
  }
}
