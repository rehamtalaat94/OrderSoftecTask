import { Component } from '@angular/core';
import ProductJson from '../../assets/jsons/products.json';

interface Product {
  ProductId: number;
  ProductName: string;
  ProductPrice: number;
  AvailablePieces: number;
  ProductImg: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'Import JSON Data from Assets Folder';
  products: Product[] = [];

  constructor(){
    debugger;
  this.products = ProductJson;
  console.log(this.products);

  }
}
