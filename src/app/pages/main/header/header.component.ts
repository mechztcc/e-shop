import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  faShoppingCart, faSearch, faBars, faUser, faHome, faKaaba } from '@fortawesome/free-solid-svg-icons' ;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faBars = faBars;
  faUser = faUser;
  faHome = faHome;
  faKaaba = faKaaba;

  constructor(private route: Router) { }

  
  ngOnInit(): void {
  }

  createPage() {
    this.route.navigate(['/login'])
  }
}
