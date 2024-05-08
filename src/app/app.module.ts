import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrenciesListComponent } from './components/currenciesList/currencies-list/currencies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { CurrencieConverterComponent } from './components/currencie-converter/currencie-converter.component';
import {MatTableModule} from "@angular/material/table";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ConvertPageComponent } from './pages/convert-page/convert-page.component';
import {RouterOutlet} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { ConvertionsListComponent } from './components/convertions-list/convertions-list.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesListComponent,
    CurrencieConverterComponent,
    LandingPageComponent,
    ListPageComponent,
    ConvertPageComponent,
    HeaderComponent,
    ConvertionsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
