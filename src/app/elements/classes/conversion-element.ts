import {Conversion} from "../../models/conversion";

export class ConversionElement {
  date:Date
  conversionDate:string
  conversionTime:string
  value:number
  origin:string
  destin:string
  result:number
  tax:number
  constructor(response:Conversion,amount:number) {
    this.date=new Date()
    this.conversionDate=(this.date.getDay()<9?'0':'') + this.date.getDay()+'/'+(this.date.getMonth()<8?'0':'')+(this.date.getMonth()+1)+'/'+this.date.getFullYear()
    this.conversionTime= this.date.getHours()+":"+this.date.getMinutes()
    this.result=response.conversion_result
    this.tax=response.conversion_rate
    this.destin=response.target_code
    this.origin=response.base_code
    this.value=amount


  }
}
