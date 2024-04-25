import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  url = 'https://v6.exchangerate-api.com/v6/d69dced7338e59b2930d2539'
  constructor( private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  getCurrencyList(){
    // @ts-ignore
    console.log(this.http.get(`${this.url}/codes/`).subscribe(response=>console.log(response)))
    return this.http.get(`${this.url}/codes/`)
  }

}
