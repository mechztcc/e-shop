import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.sass']
})
export class CardItemsComponent implements OnInit {

  faShoppingCart = faShoppingCart;

  @Input()
  item: Product;

  

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
