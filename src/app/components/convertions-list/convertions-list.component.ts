import { Component } from '@angular/core';
import {ConversionElement} from "../../../assets/classes/conversion-element";

@Component({
  selector: 'app-convertions-list',
  templateUrl: './convertions-list.component.html',
  styleUrls: ['./convertions-list.component.css']
})
export class ConvertionsListComponent {
  conversions:ConversionElement[]
  constructor() {

    if(!localStorage.getItem('conversionList'))
      this.conversions=[]
    else
      this.conversions=JSON.parse(localStorage.getItem('conversionList') as string).list

  }
  print(i:ConversionElement){
    this.conversions.push(i)
    localStorage.setItem('conversionList',JSON.stringify({list:this.conversions}))
    console.log(this.conversions)
  }

  removeItem(i:number){
    this.conversions.splice(i,1)
    localStorage.setItem('conversionList',JSON.stringify({list:this.conversions}))
  }
}
