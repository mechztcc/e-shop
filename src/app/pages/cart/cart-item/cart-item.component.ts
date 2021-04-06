import { Product } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass']
})
export class CartItemComponent implements OnInit {

  faTrash = faTrash;

  @Input()
  item: Product;

  constructor() { }

  ngOnInit(): void {
    
  }

}
