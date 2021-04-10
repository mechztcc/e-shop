import { Router } from '@angular/router';
import { add } from './../../cart/ngrx';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { faSearchPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from './../../../types';



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

  count$: Observable<any>

  constructor(private store: Store<{ count: Product }>, private route: Router) { 
    this.count$ = store.select('count')
  }

  ngOnInit(): void { 
    
  }

  addToCart() {
    this.store.dispatch(add({ payload: this.item }))
  }


}
