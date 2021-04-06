import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private route: Router) { }

  
  ngOnInit(): void {
  }

  createPage() {
    this.route.navigate(['/login'])
  }
}
