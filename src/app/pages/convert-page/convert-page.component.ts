import {Component, ViewChild} from '@angular/core';
import {ConversionElement} from "../../elements/classes/conversion-element";

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent {

addItem(i:any){
  console.log(i)
}



}
