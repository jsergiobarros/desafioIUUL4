import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {FormControl} from "@angular/forms";
import {CodesView} from "../../models/codes-view";
import {Conversion} from "../../models/conversion";


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  url = 'https://v6.exchangerate-api.com/v6/d69dced7338e59b2930d2539'
  constructor( private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  getCurrencyList():Observable<CodesView>{
    // @ts-ignore

    return this.http.get(`${this.url}/codes/`)
  }
  getCurrencyDuo(origem:String,destino:String,valor:String):Observable<Conversion>{
    // @ts-ignore

    return this.http.get(`${this.url}/pair/${origem}/${destino}/${valor}`)

  }
}
