import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import { Seller } from '../seller';

import { SellerService } from '../seller.service';

@Component({
  selector: 'app-view-one-product',
  templateUrl: './view-one-product.component.html',
  styleUrls: ['./view-one-product.component.css']
})
export class ViewOneProductComponent implements OnInit {
  
  id!: number;
    seller:Seller=new Seller();
    constructor(private sellerService:SellerService,
      private route:ActivatedRoute,
      private router:Router) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.sellerService.getSellerById(this.id).subscribe(data=>{
        this.seller=data;
      },error=>console.log(error));
    }
  goBack(){
    this.router.navigate(['/productlist']);
  }
  }
  
  