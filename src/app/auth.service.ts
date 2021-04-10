import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged: boolean = false;

  constructor() { }

  auth(email: String, password: String) {

    if(email == 'user@email.com') {
      this.logged = true;
      
    }
    return false;
  }
}
