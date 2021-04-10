import { Router } from '@angular/router';
import { PaymentCard, Product } from './../../types';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  PhoneData: Product[] = []
  MouseData: Product[] = []

  paymentCard: PaymentCard[] = [
    {url: 'assets/car.png', text: 'Free shipping'},
    {url: 'assets/credit-card.png', text: 'Pay with interest-free credit card'}, 
    {url: 'assets/safe.png', text: 'Safe delivery'}
  ];

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;


  constructor(private dataService: DataService, private route: Router) { }

  ngOnInit(): void {
    this.PhoneData = this.dataService.getPhoneData()
    this.MouseData = this.dataService.getMouseData()
    this.route.navigate(['/offers'])

    
  }

}
