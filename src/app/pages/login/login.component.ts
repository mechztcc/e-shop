import { Component, OnInit } from '@angular/core';
import { faChevronRight, faUser, faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  faChevronRight= faChevronRight;
  faUser = faUser;
  faUnlock = faUnlock;

  constructor() { }

  ngOnInit(): void {
  }

}
