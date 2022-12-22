import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-view-one-customer',
  templateUrl: './view-one-customer.component.html',
  styleUrls: ['./view-one-customer.component.css']
})
export class ViewOneCustomerComponent implements OnInit {

  id!:number;
  customer:Customer=new Customer()
  constructor() { }

  ngOnInit(): void {
  }
  goBack(){
    
  }

}
