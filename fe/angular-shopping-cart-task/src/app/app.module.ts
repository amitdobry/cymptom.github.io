import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MainComponent } from './components/layout-area/main/main.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { ShopComponent } from './components/shop-area/shop/shop.component';
import { ProductListComponent } from './components/shop-area/product-area/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/shop-area/cart-area/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    HomeComponent,
    ShopComponent,
    ProductListComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    // {
    // provide: HTTP_INTERCEPTORS, // Register the interceptor
    // },
  ],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
