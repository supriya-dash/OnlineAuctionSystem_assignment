import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
@Component({
  selector: 'app-seller-view',
  templateUrl: './seller-view.component.html',
  styleUrls: ['./seller-view.component.css']
})
export class SellerViewComponent implements OnInit {
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



  updateProduct(id:number){

    this.router.navigate(['/updateproduct',id]);

  }



  deleteSeller(id:number){

    this.sellerService.deleteSeller(id).subscribe(data=>{

      console.log(data);

      this.getSeller();

    })

  }

  viewOneSeller(id:number){

    this.router.navigate(['/viewoneseller',id]);



  }

}

