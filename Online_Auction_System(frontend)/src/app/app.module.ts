import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerViewComponent } from './seller-view/seller-view.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateSellerComponent } from './create-seller/create-seller.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewOneCustomerComponent } from './view-one-customer/view-one-customer.component';
import { ViewOneProductComponent } from './view-one-product/view-one-product.component';
import { ViewOneSellerComponent } from './view-one-seller/view-one-seller.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerViewComponent,
    CustomerViewComponent,
    CreateCustomerComponent,
    CreateSellerComponent,
    HomeComponent,
    ProductViewComponent,
    UpdateProductComponent,
    ViewOneCustomerComponent,
    ViewOneProductComponent,
    ViewOneSellerComponent,
    UpdateCustomerComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
