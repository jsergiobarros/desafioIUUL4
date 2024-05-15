import {Conversion} from "../../models/conversion";

export class ConversionElement {
  date:Date
  value:number
  origin:string
  destin:string
  result:number
  tax:number
  constructor(response:Conversion,amount:number) {
    this.date=new Date()
    this.result=response.conversion_result
    this.tax=response.conversion_rate
    this.destin=response.target_code
    this.origin=response.base_code
    this.value=amount
  }

}
