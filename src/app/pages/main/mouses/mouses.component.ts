import { DataService } from './../data.service';
import { Product } from 'src/app/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.component.html',
  styleUrls: ['./mouses.component.sass']
})
export class MousesComponent implements OnInit {

  items: Product[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.getMouseData();
  }

}
