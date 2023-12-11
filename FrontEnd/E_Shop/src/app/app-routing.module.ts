import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    
  },
  {
    path: 'home',
    component: HomeComponent,
    
  }, 
   {
    path: 'contact',
    component: ContactComponent,
    
  },
  {
    path :'AboutUs',
    component : AboutUsComponent,
  },
  {
    path :'cart',
    component : CartComponent,
  },
  {
    path :'sohp',
    component : ShopComponent,
  },
  {
    path :'user',
    component : UserAccountComponent,
  },
  {
    path :'faq',
    component : FaqComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
