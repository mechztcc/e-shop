import { Product } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass']
})
export class CartItemComponent implements OnInit {

  @Input()
  item: Product;

  constructor() { }

  ngOnInit(): void {
    
  }

}
