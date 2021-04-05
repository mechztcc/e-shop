import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faCircleNotch, faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCircleNotch = faCircleNotch;
  faCircle = faCircle;

  imageObject = [{
    image: 'assets/banner04.jpg',
    thumbImage: 'assets/banner04.jpg',
    alt: 'img'
  },
  {
    image: 'assets/banner02.jpg',
    thumbImage: 'assets/banner02.jpg',
    alt: 'img'
  }];


  style = { width: '100%', height: '60%'}


  constructor() { }

  ngOnInit(): void {

  }
}