import { Product } from './../../../types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.sass']
})
export class TotalComponent implements OnInit {

  @Input()
  items: any;

  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalPrice()    
  }

  totalPrice() {
    this.items.forEach((e: any) => {
      this.total += e.price;
    });
  }

}
