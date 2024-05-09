import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {ExchangeService} from "../../../../assets/service/exchange/exchange.service";
import {FormControl} from "@angular/forms";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {SupportedCodes} from "../../../../assets/models/supported-codes";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements AfterViewInit{
  codes:SupportedCodes[]=[]

  displayedColumns: string[] = ['code', 'description'];
  dataSource: MatTableDataSource<SupportedCodes>  ;
  constructor( ) {

    this.codes=JSON.parse(localStorage.getItem('codes') as string).list
    this.dataSource=new MatTableDataSource<SupportedCodes>(this.codes)
  }


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator as MatPaginator;
  }




}

