import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.sass']
})
export class SmartphonesComponent implements OnInit {

  items: Product[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.getPhoneData();
  }

}
