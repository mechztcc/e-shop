import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './pages/cart/ngrx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardItemsComponent } from './pages/main/card-items/card-items.component';
import { PaymentCardComponent } from './pages/main/payment-card/payment-card.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { BannerComponent } from './pages/main/banner/banner.component';
import { SideSelectionComponent } from './pages/main/side-selection/side-selection.component';
import {  NgImageSliderModule } from 'ng-image-slider';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { EmptyComponent } from './pages/cart/empty/empty.component';
import { CartItemComponent } from './pages/cart/cart-item/cart-item.component';
import { TotalComponent } from './pages/cart/total/total.component';
import { GridContentComponent } from './pages/main/grid-content/grid-content.component';
import { OffersComponent } from './pages/main/offers/offers.component';
import { SmartphonesComponent } from './pages/main/smartphones/smartphones.component';
import { MousesComponent } from './pages/main/mouses/mouses.component';
import { ItemDetailsComponent } from './pages/main/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CardItemsComponent,
    PaymentCardComponent,
    FooterComponent,
    BannerComponent,
    SideSelectionComponent,
    LoginComponent,
    CartComponent,
    EmptyComponent,
    CartItemComponent,
    TotalComponent,
    GridContentComponent,
    OffersComponent,
    SmartphonesComponent,
    MousesComponent,
    ItemDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgImageSliderModule,
    StoreModule.forRoot({count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
