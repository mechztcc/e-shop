import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faHome, faUser } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faHome = faHome;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
