import { Component, OnInit } from '@angular/core';
import {  faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons' ;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faBars = faBars;

  constructor() { }

  
  ngOnInit(): void {
  }

  showContent() {
    console.log("running");
    
  }
}
