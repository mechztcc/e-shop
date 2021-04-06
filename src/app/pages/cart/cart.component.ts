import { add, remove } from './ngrx';
import { Product } from './../../types';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../main/data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {



  count$: Observable<any>

  items: Product[] = []

  constructor(private store: Store<{ count: Product }>) { 
    this.count$ = store.select('count')
  }

  ngOnInit(): void {
    this.count$.subscribe((a) => { this.items.push(a)});

    
    
  }


}
