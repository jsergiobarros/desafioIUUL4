import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ExchangeService} from "../../service/exchange/exchange.service";
import {SupportedCodes} from "../../models/supported-codes";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {StorageService} from "../../service/storage/storage.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements AfterViewInit{
  show:boolean=false
  codes:SupportedCodes[]=[]

  displayedColumns: string[] = ['code', 'description'];
  dataSource= new MatTableDataSource<SupportedCodes>()  ;
  constructor(
    private exchangeService:ExchangeService,
    private storageService:StorageService,
    private _liveAnnouncer: LiveAnnouncer
) {



    if(!storageService.get('codes'))

      this.exchangeService.getCurrencyList().subscribe(e=> {
        let codes: SupportedCodes[] = []
        e.supported_codes.map((x) => {
          // @ts-ignore
          codes.push({code: x[0], description: x[1]})
        })
        storageService.set('codes',JSON.stringify({list:codes}))
        // this.show=true
        // this.codes=JSON.parse(this.storageService.get('codes') as string).list
        // this.dataSource=new MatTableDataSource<SupportedCodes>(codes)
        location.reload()
      })
    else{
      this.show=true
      this.codes=JSON.parse(this.storageService.get('codes') as string).list
      this.dataSource=new MatTableDataSource<SupportedCodes>(this.codes)
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator as MatPaginator;
    this.dataSource.sort = this.sort as MatSort;
  }

  async busca():Promise<SupportedCodes[]>{
    let codes: SupportedCodes[] = []
    await this.exchangeService.getCurrencyList().subscribe(e=> {

      e.supported_codes.map((x) => {
        // @ts-ignore
        codes.push({code: x[0], description: x[1]})
      })})
    console.log(codes)
    return codes
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  filtro(input:HTMLInputElement){
    let filter=input.value.toUpperCase()
    let filtered:SupportedCodes[]=[]
    for(let i of this.codes)
      if(i.code.indexOf(filter)>-1 || i.description.toUpperCase().indexOf(filter)>-1)
        filtered.push(i)
    this.dataSource=new MatTableDataSource<SupportedCodes>(filtered)
    this.dataSource.paginator = this.paginator as MatPaginator;
    this.dataSource.sort = this.sort as MatSort;
  }

}




