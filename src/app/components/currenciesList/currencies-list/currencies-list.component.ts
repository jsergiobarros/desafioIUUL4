import { Component } from '@angular/core';
import {ExchangeService} from "../../../../assets/service/exchange/exchange.service";

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent {
  codes:any[]=[]
  constructor(
    private exchangeService : ExchangeService
  ) {
    console.log('teste componente')
    // @ts-ignore
    this.exchangeService.getCurrencyList().subscribe(e=>{this.codes= e.supported_codes})

  }



}
