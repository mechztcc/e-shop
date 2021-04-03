import { Component, OnInit } from '@angular/core';
import {  faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons' ;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
