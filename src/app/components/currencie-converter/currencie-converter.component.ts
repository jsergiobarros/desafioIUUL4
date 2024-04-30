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

  constructor(
    private exchangeService : ExchangeService
  ) {
    console.log('teste componente')
    // @ts-ignore
    this.exchangeService.getCurrencyList().subscribe(e=>{
      this.codes= e.supported_codes})

  }
}
