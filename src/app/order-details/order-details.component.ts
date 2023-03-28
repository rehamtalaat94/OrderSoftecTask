import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  orderId:any;
  order:any = null;
  orders: Order[] = [];
  constructor(private activateRoute:ActivatedRoute){
  }
 ngOnInit(){
  debugger;
  this.orderId=this.activateRoute.snapshot.params["id"];
  this.orders = OrderJson;
  this.order = this.orders.find(x=> x.OrderId == this.orderId) as Order;
 }
}
