import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {ConversionElement} from "../../elements/classes/conversion-element";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../components/delete-dialog/delete-dialog.component";
import {StorageService} from "../../service/storage/storage.service";

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
  constructor(public dialog:MatDialog,
              public storageService:StorageService) {

    if(!storageService.get('conversionList'))
      this.conversions=[]
    else
      this.conversions=JSON.parse(storageService.get('conversionList') as string).list
    this.dataSource = new MatTableDataSource<ConversionElement>(this.conversions);
  }
  getData(date:string):string{
    let data= new Date(date)
    return (data.getDay()<9?'0':'')+data.getDay()+"/"+(data.getMonth()<8?'0':'')+(data.getMonth()+1)+"/"+data.getFullYear()
  }
  getTime(date:string):string{
    let data= new Date(date)
    return data.getHours()+":"+data.getMinutes()
  }

  removeItem(i:number){
    let dialog = this.dialog.open(DeleteDialogComponent)
    dialog.afterClosed().subscribe(result=>{
      if(result==="true"){
        this.conversions.splice(i,1)
        this.storageService.set('conversionList',JSON.stringify({list:this.conversions}))
        this.dataSource = new MatTableDataSource<ConversionElement>(this.conversions);
        this.dataSource.paginator = this.paginator as MatPaginator;
      }
    })

  }
}
