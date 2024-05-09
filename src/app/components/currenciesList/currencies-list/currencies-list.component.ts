import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {ExchangeService} from "../../../../assets/service/exchange/exchange.service";
import {FormControl} from "@angular/forms";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {SupportedCodes} from "../../../../assets/models/supported-codes";
import {MatPaginator} from "@angular/material/paginator";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort, MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements AfterViewInit{
  codes:SupportedCodes[]=[]

  displayedColumns: string[] = ['code', 'description'];
  dataSource: MatTableDataSource<SupportedCodes>  ;
  constructor(private _liveAnnouncer: LiveAnnouncer ) {

    this.codes=JSON.parse(localStorage.getItem('codes') as string).list
    this.dataSource=new MatTableDataSource<SupportedCodes>(this.codes)
  }


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator as MatPaginator;
    this.dataSource.sort = this.sort as MatSort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  filtro(){
    let filter = (document.getElementById('input') as HTMLInputElement).value.toUpperCase()
    let filtered:SupportedCodes[]=[]
    for(let i of this.codes)
      if(i.code.indexOf(filter)>-1 || i.description.toUpperCase().indexOf(filter)>-1)
        filtered.push(i)
    this.dataSource=new MatTableDataSource<SupportedCodes>(filtered)
    this.dataSource.paginator = this.paginator as MatPaginator;
    this.dataSource.sort = this.sort as MatSort;
  }

}

