import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { OffersComponent } from './pages/main/offers/offers.component';
import { SmartphonesComponent } from './pages/main/smartphones/smartphones.component';
import { MousesComponent } from './pages/main/mouses/mouses.component';
import { ItemDetailsComponent } from './pages/main/item-details/item-details.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'offers', component: OffersComponent },
    { path: 'smartphones', component: SmartphonesComponent },
    { path: 'mouses', component: MousesComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
