import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.sass']
})
export class OffersComponent implements OnInit {

  items: Product[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.getOffers();
  }

}
