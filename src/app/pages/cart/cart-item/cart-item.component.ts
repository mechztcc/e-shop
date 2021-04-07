import { Product } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';

import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass']
})
export class CartItemComponent implements OnInit {

  faMinus = faMinus;
  faPlus = faPlus;
  faTrash = faTrash;

  @Input()
  item: Product;

  constructor() { }

  ngOnInit(): void {
    
  }

}
