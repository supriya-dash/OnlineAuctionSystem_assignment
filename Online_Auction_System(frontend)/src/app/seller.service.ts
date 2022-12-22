
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Seller } from './seller';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
 
  private baseURL = "http://localhost:8090/sellers";
  constructor(private httpClient:HttpClient) { }

  getSellerList(): Observable<Seller[]>{
    return this.httpClient.get<Seller[]>(`${this.baseURL}`);
  }

  createSeller(seller: Seller): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,seller);
  }

   getSellerById(id: number): Observable<Seller>{
  return this.httpClient.get<Seller>(`${this.baseURL}/${id}`);
}

   updateSeller(id: number,_employee: Seller): Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,Seller);
}
updateProduct(id:number,seller:Seller):Observable<Object>{

  return this.httpClient.put(`${this.baseURL}/${id}`,seller);

}

deleteProduct(id:number,seller:Seller):Observable<Object>{

  return this.httpClient.put(`${this.baseURL}/${id}`,seller);

}

deleteSeller(id:number):Observable<Object>{

  return this.httpClient.delete(`${this.baseURL}/${id}`);

}

}

