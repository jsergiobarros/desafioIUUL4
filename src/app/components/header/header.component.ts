import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  onClick(component:HTMLAnchorElement,remove1:HTMLAnchorElement,remove2:HTMLAnchorElement){
    component.classList.add('active')
    remove1.classList.remove('active')
    remove2.classList.remove('active')

  }
}
