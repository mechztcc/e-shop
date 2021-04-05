import { Product } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.sass']
})
export class CardItemsComponent implements OnInit {

  @Input()
  item: Product;

  

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
