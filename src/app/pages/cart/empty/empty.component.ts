import { Component, OnInit } from '@angular/core';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.sass']
})
export class EmptyComponent implements OnInit {

  faBoxOpen = faBoxOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
