import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SalarieService, Salarie } from '@app/core';

@Component({
  selector: 'app-salarie-grid',
  templateUrl: './salarie-grid.component.html',
  styleUrls: ['./salarie-grid.component.scss']
})
export class SalarieGridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  salaries$: Observable<Salarie[]>;
  data: Salarie[] = [];
  dataSource: MatTableDataSource<Salarie>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['matricule', 'nom', 'prenom', 'email', 'mobile','actions'];


  constructor(
    //private modalService: NgbModal,
    private salarieService: SalarieService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Salarie>(this.data);
    this.loadSalaries();
  }

  loadSalaries() {
    this.salarieService.getAll().subscribe(res => this.updateData(res));
  }

  updateData(res) {
    console.log(res)
    this.dataSource.data = res;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteSalarie(id){
    this.salarieService.delete(id).subscribe(res => this.loadSalaries());
  }

  // Edition attestion de salaire
  getAttestationSalaire(id){
    this.salarieService.genereAttestationSalaire(id).subscribe(res => null);
  }
}
