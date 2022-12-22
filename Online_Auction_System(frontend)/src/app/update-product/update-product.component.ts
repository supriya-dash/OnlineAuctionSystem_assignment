import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import { Seller } from '../seller';

import { SellerService } from '../seller.service';



@Component({

  selector: 'app-update-product',

  templateUrl: './update-product.component.html',

  styleUrls: ['./update-product.component.css']

})
export class UpdateProductComponent implements OnInit {

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

  onSubmit(){

    this.sellerService.updateProduct(this.id,this.seller).subscribe(data=>{

      this.gotoProductList();

    },

    error=>console.log(error));

   

  }

  gotoProductList(){

    this.router.navigate(['/productlist']);



  }



}