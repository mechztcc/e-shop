import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
