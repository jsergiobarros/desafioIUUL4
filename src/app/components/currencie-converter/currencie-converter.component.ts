import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExchangeService} from "../../service/exchange/exchange.service";
import {MatInputModule} from "@angular/material/input";
import {Conversion} from "../../models/conversion";
import {ConversionElement} from "../../elements/classes/conversion-element";
import {MatTableDataSource} from "@angular/material/table";
import {StorageService} from "../../service/storage/storage.service";

@Component({
  selector: 'app-currencie-converter',
  templateUrl: './currencie-converter.component.html',
  styleUrls: ['./currencie-converter.component.css']
})

export class CurrencieConverterComponent {
  codes:Array<[String,String]>[]=[]
  conversions:ConversionElement[]
  origem='BRL'
  destino='USD'


  constructor(
    private storageService:StorageService,
    private exchangeService : ExchangeService
  ) {
    // @ts-ignore
    this.exchangeService.getCurrencyList().subscribe(e=>{
      this.codes= e.supported_codes})
    if(!storageService.get('conversionList'))
      this.conversions=[]
    else
      this.conversions=JSON.parse(storageService.get('conversionList') as string).list


  }
  changeCurencie(novo:string, onde:string){
    if(onde==="origem"){
      this.origem=novo
    }
    if(onde==="destino"){
      this.destino=novo
    }

  }

  onValueType():void{
    let input=document.getElementById("input-element")as HTMLInputElement
    let button=document.getElementById('converter') as HTMLButtonElement
    if(parseInt( input.value)>0)
      button.disabled=false

    else
      button.disabled=true
  }
  addItem(i:ConversionElement){
    this.conversions.push(i)
    this.storageService.set('conversionList',JSON.stringify({list:this.conversions}))
  }
  convert(){
    let input=document.getElementById("input-element")as HTMLInputElement //mudar para bindings
    this.exchangeService.getCurrencyDuo(this.origem,this.destino,input.value).subscribe(e=>{
      this.addItem(new ConversionElement(e,parseInt( input.value)))
      input.value=''
      let button=document.getElementById('converter') as HTMLButtonElement
      button.disabled=true
    })


  }
}
