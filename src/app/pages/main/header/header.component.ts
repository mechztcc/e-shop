import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  faShoppingCart, faSearch, faBars, faUser, faHome, faKaaba } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';


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

  constructor(private route: Router, private snackbar: MatSnackBar, private authService: AuthService) { }

  
  ngOnInit(): void {
  }

  createPage() {
    this.route.navigate(['/login'])
  }

  showSnackBar() {
    if(!this.authService.logged) {
      this.snackbar.open('You must be logged!', 'X', { duration: 4000})
    }

    this.route.navigate(['cart'])
  }
}
