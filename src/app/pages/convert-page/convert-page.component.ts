import {Component, ViewChild} from '@angular/core';
import {ConversionElement} from "../../../assets/classes/conversion-element";
import {ConvertionsListComponent} from "../../components/convertions-list/convertions-list.component";

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent {

  @ViewChild('conversionList') list: ConvertionsListComponent | undefined

  addItem(event:ConversionElement){

    // @ts-ignore
    this.list.print(event)




  }


}
