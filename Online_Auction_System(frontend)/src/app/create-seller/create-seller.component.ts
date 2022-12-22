import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{Seller} from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styleUrls: ['./create-seller.component.css']
})
export class CreateSellerComponent implements OnInit {
seller:Seller=new Seller();
  constructor( private sellerService:SellerService,
    private router:Router) { }

  ngOnInit(): void {
  }
  saveSeller(){
    this.sellerService.createSeller(this.seller).subscribe(data=>{
      console.log(data);
      this.gotoSellerList();
    },
    error=>console.log(error)
    )
  }
  gotoSellerList(){
    this.router.navigate(['/sellers'])
  }
  onSubmit(){
    console.log(this.seller);
    this.saveSeller();
  }

}
