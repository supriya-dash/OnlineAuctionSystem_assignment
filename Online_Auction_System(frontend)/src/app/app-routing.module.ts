import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateSellerComponent } from './create-seller/create-seller.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SellerViewComponent } from './seller-view/seller-view.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewOneProductComponent } from './view-one-product/view-one-product.component';
import { ViewOneSellerComponent } from './view-one-seller/view-one-seller.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'sellers',
    component:SellerViewComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
{
    path:'about',
    component:AboutComponent
},
{
    path:'contact',
    component:ContactComponent
},
  {
    path:'createseller',
    component:CreateSellerComponent
  },
  {
    path:'updateproduct/:id',
    component:UpdateProductComponent
  },
  {
    path:'productlist',
    component:ProductViewComponent
  },
  {
    path:'viewoneseller/:id',
    component:ViewOneSellerComponent
  },
  {
    path:'viewoneproduct/:id',
    component:ViewOneProductComponent
  },
  {
    path:'createcustomer',
    component:CreateCustomerComponent
  },
  {
    path:'customers',
    component:CustomerViewComponent
  },
  {
    path:'updatecustomer/:id',
    component:UpdateCustomerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

