import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ConversionElement} from "../../../assets/classes/conversion-element";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-conversions-list',
  templateUrl: './conversions-list.component.html',
  styleUrls: ['./conversions-list.component.css']
})
export class ConversionsListComponent implements AfterViewInit {
  conversions:ConversionElement[]
  displayedColumns: string[] = ['data', 'dataHour', 'valor', 'moedaOrig','moedaDest','resultado','taxa','açoes'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  dataSource :  MatTableDataSource<ConversionElement>
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator as MatPaginator;
  }
  constructor() {

    if(!localStorage.getItem('conversionList'))
      this.conversions=[]
    else
      this.conversions=JSON.parse(localStorage.getItem('conversionList') as string).list
    this.dataSource = new MatTableDataSource<ConversionElement>(this.conversions);
  }
  print(i:ConversionElement){
    this.conversions.push(i)
    localStorage.setItem('conversionList',JSON.stringify({list:this.conversions}))
    this.dataSource = new MatTableDataSource<ConversionElement>(this.conversions);
  }

  removeItem(i:number){
    this.conversions.splice(i,1)
    localStorage.setItem('conversionList',JSON.stringify({list:this.conversions}))
    this.dataSource = new MatTableDataSource<ConversionElement>(this.conversions);
  }
}
