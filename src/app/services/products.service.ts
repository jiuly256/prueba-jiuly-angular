import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_ENDPOINT= 'http://localhost:8000/api';
  products: Product[];
  httpClient: any;

  constructor(private httClient: HttpClient) { }

  save(product: Product){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'products', product, {headers:headers});

  }
}
