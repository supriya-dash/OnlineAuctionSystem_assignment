import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  
 seller:Seller=new Seller();
   sellers!:Seller[];
  constructor(private sellerService:SellerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getSeller();
  
  }

   private getSeller(){
    this.sellerService.getSellerList().subscribe(data=>{
      this.sellers=data;
    })
  }

  
  deleteProduct(id:number){
    this.sellerService.deleteProduct(id,this.seller).subscribe(data=>{
      this.getSeller();
    },
    error=>console.log(error));
  }
  viewOneProduct(id:number){
    this.router.navigate(['/viewoneproduct',id]);
  }

}

