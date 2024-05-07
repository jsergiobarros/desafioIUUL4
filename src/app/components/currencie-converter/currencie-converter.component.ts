import {Component, Input} from '@angular/core';
import {ExchangeService} from "../../../assets/service/exchange/exchange.service";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-currencie-converter',
  templateUrl: './currencie-converter.component.html',
  styleUrls: ['./currencie-converter.component.css']
})
export class CurrencieConverterComponent {
  @Input()  codes:Array<[String,String]>[]=[]
  origem='BRL'
  destino='USD'

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
  convert(){
    let input=document.getElementById("input-element")as HTMLInputElement

    this.exchangeService.getCurrencyDuo(this.origem,this.destino,input.value).subscribe(e=>{
      console.log(e.conversion_result, e.target_code,e.base_code)
      input.value=''
    })

  }
}
