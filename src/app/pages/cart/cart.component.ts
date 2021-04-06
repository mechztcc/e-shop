
import { Product } from './../../types';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../main/data.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {




  items: Product[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

}
