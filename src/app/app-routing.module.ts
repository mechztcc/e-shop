import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
