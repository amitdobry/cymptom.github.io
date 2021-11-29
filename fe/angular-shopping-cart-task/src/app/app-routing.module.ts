import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { MainComponent } from './components/layout-area/main/main.component';
import { ShopComponent } from './components/shop-area/shop/shop.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
