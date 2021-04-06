import { faShoppingCart, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Product } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.sass']
})
export class CardItemsComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faSearchPlus = faSearchPlus;

  @Input()
  item: Product;

  

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
