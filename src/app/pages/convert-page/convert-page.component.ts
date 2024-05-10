import {Component, ViewChild} from '@angular/core';
import {ConversionElement} from "../../../assets/classes/conversion-element";
import {ConversionsListComponent} from "../../components/conversions-list/conversions-list.component";

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent {

  // @ViewChild('conversionList') list: ConversionsListComponent | undefined
  list = new ConversionsListComponent()
  addItem(event:ConversionElement){

    // @ts-ignore
    this.list.print(event)




  }


}
