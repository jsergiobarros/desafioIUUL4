import { Component } from '@angular/core';
import {ExchangeService} from "../../../assets/service/exchange/exchange.service";

@Component({
  selector: 'app-currencie-converter',
  templateUrl: './currencie-converter.component.html',
  styleUrls: ['./currencie-converter.component.css']
})
export class CurrencieConverterComponent {
  codes:any[]=[]

  constructor(
    private exchangeService : ExchangeService
  ) {
    console.log('teste componente')
    // @ts-ignore
    this.exchangeService.getCurrencyList().subscribe(e=>{this.codes= e.supported_codes})

  }
}
