import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExchangeService} from "../../../assets/service/exchange/exchange.service";
import {MatInputModule} from "@angular/material/input";
import {Conversion} from "../../../assets/models/conversion";
import {ConversionElement} from "../../../assets/classes/conversion-element";

@Component({
  selector: 'app-currencie-converter',
  templateUrl: './currencie-converter.component.html',
  styleUrls: ['./currencie-converter.component.css']
})
export class CurrencieConverterComponent {
  @Input()  codes:Array<[String,String]>[]=[]

  origem='BRL'
  destino='USD'

  @Output() conversionEvent=new EventEmitter<ConversionElement>()

  constructor(
    private exchangeService : ExchangeService
  ) {
    // @ts-ignore
    this.exchangeService.getCurrencyList().subscribe(e=>{
      this.codes= e.supported_codes})

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
  convert(){
    let input=document.getElementById("input-element")as HTMLInputElement
    this.exchangeService.getCurrencyDuo(this.origem,this.destino,input.value).subscribe(e=>{
      this.conversionEvent.emit(new ConversionElement(e,parseInt( input.value)))
      input.value=''
      let button=document.getElementById('converter') as HTMLButtonElement
      button.disabled=true
    })


  }
}
