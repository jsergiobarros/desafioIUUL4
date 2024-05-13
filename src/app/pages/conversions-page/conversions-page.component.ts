import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {ConversionElement} from "../../elements/classes/conversion-element";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-conversions-page',
  templateUrl: './conversions-page.component.html',
  styleUrls: ['./conversions-page.component.css']
})
export class ConversionsPageComponent implements AfterViewInit {
  conversions:ConversionElement[]
  @Input() displayedColumns: string[] = ['data', 'dataHour', 'valor', 'moedaOrig','moedaDest','resultado','taxa','açoes'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  @Input() dataSource :  MatTableDataSource<ConversionElement>
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
  addItem(i:ConversionElement){
    this.conversions.push(i)
    localStorage.setItem('conversionList',JSON.stringify({list:this.conversions})) //criar como servico
    this.dataSource = new MatTableDataSource<ConversionElement>(this.conversions);
  }

  removeItem(i:number){
    this.conversions.splice(i,1)
    localStorage.setItem('conversionList',JSON.stringify({list:this.conversions}))
    this.dataSource = new MatTableDataSource<ConversionElement>(this.conversions);
  }
}
