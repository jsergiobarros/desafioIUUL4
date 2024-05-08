import { Component } from '@angular/core';
import {ConversionElement} from "../../../assets/classes/conversion-element";

@Component({
  selector: 'app-convertions-list',
  templateUrl: './convertions-list.component.html',
  styleUrls: ['./convertions-list.component.css']
})
export class ConvertionsListComponent {
  conversions:ConversionElement[]=[]
  print(i:ConversionElement){
    this.conversions.push(i)
    console.log(this.conversions)
  }

  removeItem(i:number){
    this.conversions.splice(i,1)
  }
}
