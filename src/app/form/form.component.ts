import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product: Product = {
    name:null,
    description:null,
    price:null

  };
  
  constructor(private productsService : ProductsService) {
  }
  
  ngOnInit() {
  }

  saveProduct(){
    this.productsService.save(this.product).subscribe((data)=>{
      alert ('Producto guardado');
      console.log(data);
    },(error)=>{
      console.log(error);
      alert('Ocurrió un error');
    })
    
   }


}
