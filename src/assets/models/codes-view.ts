import {SupportedCodes} from "./supported-codes";

export interface CodesView {
  result: string
  documentation:string
  terms_of_use:string
  supported_codes: Array<[String,String]>[]
}
