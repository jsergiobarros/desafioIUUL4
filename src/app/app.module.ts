import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
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
import { ConversionsListComponent } from './components/conversions-list/conversions-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import { ConversionsPageComponent } from './pages/conversions-page/conversions-page.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencieConverterComponent,
    LandingPageComponent,
    ListPageComponent,
    ConvertPageComponent,
    HeaderComponent,
    ConversionsListComponent,
    ConversionsPageComponent,
    TableComponent
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
    MatInputModule,
    MatIconModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
