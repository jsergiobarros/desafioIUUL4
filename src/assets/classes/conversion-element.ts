import {Conversion} from "../models/conversion";

export class ConversionElement {
  conversionDate:string
  conversionTime:string
  value:number
  origin:string
  destin:string
  result:number
  tax:number
  constructor(response:Conversion,amount:number) {
    let date=new Date()
    this.conversionDate=(date.getDay()<9?'0':'') + date.getDay()+'/'+(date.getMonth()<8?'0':'')+(date.getMonth()+1)+'/'+date.getFullYear()
    this.conversionTime= date.getHours()+":"+date.getMinutes()
    this.result=response.conversion_result
    this.tax=response.conversion_rate
    this.destin=response.target_code
    this.origin=response.base_code
    this.value=amount


  }
}
