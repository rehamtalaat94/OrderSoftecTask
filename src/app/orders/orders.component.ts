import { Component } from '@angular/core';
import OrderJson from '../../assets/jsons/orders.json';

interface Order {
  OrderId: number;
  OrderDate: string;
  Products: ProductsDetails[];
  PaymentType: string;
  UserId:string;
}
interface ProductsDetails {
  ProductId: number;
  Quantity: number;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  title = 'Import JSON Data from Assets Folder';
  orders: Order[] = [];

  constructor(){
    debugger;
  this.orders = OrderJson;
  console.log(this.orders);

  }
}
