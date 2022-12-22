import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  
customers!:Customer[];
  constructor(private customerService:CustomerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  private getCustomer(){
    this.customerService.getCustomerList().subscribe(data=>{
      this.customers=data;
    })
  }
  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(data=>{
      console.log(data);
      this.getCustomer();
    })
  }
  updateCustomer(id:number){
    this.router.navigate(['/updatecustomer',id])
  }
  viewCustomer(id:number){
    
  }
}

