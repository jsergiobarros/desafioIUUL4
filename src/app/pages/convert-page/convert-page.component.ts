import {Component, ViewChild} from '@angular/core';
import {ConversionElement} from "../../elements/classes/conversion-element";
import {StorageService} from "../../service/storage/storage.service";
import {ExchangeService} from "../../service/exchange/exchange.service";
import {LastConversion} from "../../models/last-conversion";

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent {

  codes:Array<[String,String]>[]=[]
  conversions:ConversionElement[]
  origem='BRL'
  destino='USD'
  lastConversion:LastConversion | undefined
  private _buttonDisable:boolean=true
  inputElement:string=''
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
    if(onde==="origem")
      this.origem=novo
    if(onde==="destino")
      this.destino=novo
  }

  onValueType():void{
    if(parseInt( this.inputElement)>0)
      this.buttonDisable=false
    else
      this.buttonDisable=true
  }
  addItem(i:ConversionElement){
    this.conversions.push(i)
    this.storageService.set('conversionList',JSON.stringify({list:this.conversions}))
  }
  convert():void{
    if (this.inputElement==='')
      return
    this.exchangeService.getCurrencyDuo(this.origem,this.destino,this.inputElement).subscribe(e=>{
      this.addItem(new ConversionElement(e,parseInt( this.inputElement)))
      this.lastConversion={
        valor:this.inputElement,
        resultado:e.conversion_result.toString(),
        origem: this.origem,
        destino: this.destino,
        taxa:e.conversion_rate.toString()}
      this.inputElement=''
      this.buttonDisable=true
    })
  }
  clear():void{
    this.lastConversion=undefined
  }

  get buttonDisable(): boolean {
    return this._buttonDisable;
  }

  set buttonDisable(value: boolean) {
    this._buttonDisable = value;
  }
}
