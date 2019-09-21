import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';



/*
const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'application/json',
    'Authorization': 'Bearer YkTFiFVHKJgHNx3eAYgYCDagiFEsgwKZJ8L2eAGk'
  })
};*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  API_ENDPOINT= 'http://localhost:8000/api';
  products: Product[];


  constructor(private productService: ProductsService, private httpClient: HttpClient) {
    httpClient.get(this.API_ENDPOINT + '/products').subscribe( (data: Product[])=> {
      this.products = data;
    });
   }

  ngOnInit() {
  }

}
