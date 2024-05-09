import {Component, OnInit} from '@angular/core';
import {ExchangeService} from "../../../assets/service/exchange/exchange.service";
import {SupportedCodes} from "../../../assets/models/supported-codes";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  show:boolean=false
  constructor(
    private exchangeService:ExchangeService
  ) {
    if(!localStorage.getItem('codes'))
      this.exchangeService.getCurrencyList().subscribe(e=> {
        let codes: SupportedCodes[] = []
        e.supported_codes.map((x) => {
          // @ts-ignore
          codes.push({code: x[0], description: x[1]})
        })
        localStorage.setItem('codes',JSON.stringify({list:codes}))
        this.show=true
      })
    else
      this.show=true
  }

}




