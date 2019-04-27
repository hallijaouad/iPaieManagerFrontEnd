import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { GridDataSource } from './grid-datasource';
import { UserService } from '@app/core';


@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: GridDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nom', 'prenom', 'group', 'tel', 'email', 'actif', 'actions'];
  constructor(private usersService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    //this.usersService.getUsers().subscribe(res => this.setDataSource(res));
  }



  setDataSource(res) {
    this.dataSource = new GridDataSource(res.data, this.paginator, this.sort);
  }
}
