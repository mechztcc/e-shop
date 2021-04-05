import { Component, Input, OnInit } from '@angular/core';
import { PaymentCard } from 'src/app/types';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.sass']
})
export class PaymentCardComponent implements OnInit {

  @Input()
  item: PaymentCard;

  constructor() { }

  ngOnInit(): void {
  }

}
