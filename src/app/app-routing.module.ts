import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ConvertPageComponent} from "./pages/convert-page/convert-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";


const routes:Routes=[
  {path:'', component:LandingPageComponent},
  {path:'convert', component:ConvertPageComponent},
  {path:'list', component:ListPageComponent}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule{}
