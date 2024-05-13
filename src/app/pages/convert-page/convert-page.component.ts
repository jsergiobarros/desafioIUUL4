import {Component, ViewChild} from '@angular/core';
import {ConversionElement} from "../../elements/classes/conversion-element";
import {StorageService} from "../../service/storage/storage.service";
import {ExchangeService} from "../../service/exchange/exchange.service";

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

  onValueType(input:HTMLInputElement,button:HTMLButtonElement):void{
    if(parseInt( input.value)>0)
      button.disabled=false
    else
      button.disabled=true
  }
  addItem(i:ConversionElement){
    this.conversions.push(i)
    this.storageService.set('conversionList',JSON.stringify({list:this.conversions}))
  }
  convert(input:HTMLInputElement,button:HTMLButtonElement){
    this.exchangeService.getCurrencyDuo(this.origem,this.destino,input.value).subscribe(e=>{
      this.addItem(new ConversionElement(e,parseInt( input.value)))
      input.value=''
      button.disabled=true
    })


  }




}
