import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faHome = faHome;
  faUser = faUser;

  constructor(private authService: AuthService, private snackbar: MatSnackBar, private route: Router) { }

  ngOnInit(): void {
  }


  showSnackBar() {
    if(!this.authService.logged) {
      this.snackbar.open('You must be logged!', 'X', { duration: 4000})
    }
    this.route.navigate(['cart'])
  }
}
