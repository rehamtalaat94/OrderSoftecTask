import { Component } from '@angular/core';
import CustomerJson from '../../assets/jsons/users.json';

interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  RegisterDate:string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  title = 'Import JSON Data from Assets Folder';
  customers: Customer[] = [];

  constructor(){
    debugger;
  this.customers = CustomerJson;
  console.log(this.customers);

  }
}
