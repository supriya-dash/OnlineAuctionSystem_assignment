import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {



  private baseUrl="http://localhost:8090/customers";

  constructor(private httpClient:HttpClient) { }



  getCustomerList(): Observable<Customer[]>{

    return this.httpClient.get<Customer[]>(`${this.baseUrl}`)

  }

  createCustomer(customer: Customer):Observable<Object>{

    return this.httpClient.post(`${this.baseUrl}`,customer);

  }

  deleteCustomer(id:number):Observable<Object>{

    return this.httpClient.delete(`${this.baseUrl}/${id}`)

  }

  getCustomerById(id:number):Observable<Customer>{

    return this.httpClient.get<Customer>(`${this.baseUrl}/${id}`)

  }

  updateCustomer(id:number,customer:Customer):Observable<Object>{

    return this.httpClient.put(`${this.baseUrl}/${id}`,customer);

  }

}
