import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ShopComponent } from './shop/shop.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManComponent } from './shop/man/man.component';
import { WomanComponent } from './shop/woman/woman.component';
import { FormsModule } from '@angular/forms';

import { ShoesComponent } from './shop/shoes/shoes.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    UserAccountComponent,
    ShopComponent,
    FaqComponent,
    ContactComponent,
    CartComponent,
    AboutUsComponent,
    ManComponent,
    WomanComponent,
    ShoesComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
