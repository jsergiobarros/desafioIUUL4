import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";

import {CodesView} from "../../models/codes-view";
import {Conversion} from "../../models/conversion";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor( private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  getCurrencyList():Observable<CodesView>{
    console.log(environment)

    // @ts-ignore

     // return this.http.get(`${environment.apiUrl}/${environment.apiKey}/codes/`)
    return this.http.get(`https://v6.exchangerate-api.com/v6/d69dced7338e59b2930d2539/codes/`)
  }
  getCurrencyDuo(origem:String,destino:String,valor:String):Observable<Conversion>{
    // @ts-ignore

    // return this.http.get(`${environment.apiUrl}/${environment.apiKey}/pair/${origem}/${destino}/${valor}`)
    return this.http.get(`https://v6.exchangerate-api.com/v6/d69dced7338e59b2930d2539/pair/${origem}/${destino}/${valor}`)
  }
}
