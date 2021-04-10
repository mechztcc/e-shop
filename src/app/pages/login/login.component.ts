import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faChevronRight, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  faChevronRight= faChevronRight;
  faUser = faUser;
  faUnlock = faUnlock;

  public form: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['user@email.com', Validators.required],
      password: ['12345', Validators.required]
    });

    
    
  }

  login() {
    let auth = this.authService.auth(this.form.value.email, this.form.value.password)
    this.route.navigate(['cart'])
  }

}
