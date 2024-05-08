import {Conversion} from "../models/conversion";

export class ConversionElement {
  conversionDate:Date
  conversionTime:string
  value:number
  origin:string
  destin:string
  result:number
  tax:number
  constructor(response:Conversion,amount:number) {
    this.conversionDate=new Date()
    this.conversionTime= this.conversionDate.getHours()+":"+this.conversionDate.getMinutes()
    this.result=response.conversion_result
    this.tax=response.conversion_rate
    this.destin=response.target_code
    this.origin=response.base_code
    this.value=amount


  }
}
