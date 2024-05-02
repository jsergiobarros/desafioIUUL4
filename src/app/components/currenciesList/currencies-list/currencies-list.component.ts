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
  @Input()  codes:SupportedCodes[]=[]

  displayedColumns: string[] = ['code', 'description'];

  constructor(
    private exchangeService : ExchangeService
  ) {
    this.exchangeService.getCurrencyList().subscribe(e=>{
      for (let currency of e.supported_codes){

        // @ts-ignore
        this.codes.push({code:currency[0],description:currency[1]})
      }

    })
  }
  dataSource = new MatTableDataSource<SupportedCodes>(this.codes);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }




}

