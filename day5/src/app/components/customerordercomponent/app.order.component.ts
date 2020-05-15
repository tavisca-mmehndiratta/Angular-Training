import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/app.models';
import { Orders } from '../../models/app.constants';
import { CustomerOrderService } from '../../services/app.customerorder.service';

@Component({
  selector: 'app-order-component',
  template: `
     <div class="container"> 
        <table class="table table-striped table-bordered table-dark">
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Order Name</th>
                    <th>Date</th>
                    <th>Customer Id</th>
                    <th>Order Quantity</th>                    
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let o of filteredOrders">
                    <td>{{o.OrderId}}</td>
                    <td>{{o.OrderName}}</td>
                    <td>{{o.Date}}</td>
                    <td>{{o.CustomerId}}</td>
                    <td>{{o.OrderQty}}</td>
                    <td>{{o.Amount}}</td>
                </tr>
            </tbody>
        </table>
    </div>   
  `
})

export class OrderComponent implements OnInit {
  orders = Orders;
  _filteredOrders: Array<Order>;
  customerIdList: Array<number>;
  constructor(private serv: CustomerOrderService) {
    this._filteredOrders = new Array<Order>()
    this.customerIdList = new Array<number>();
  }

  ngOnInit() { 
    this.serv.emitCustomerId.subscribe((data) => {
        this.customerIdList = new Array<number>();
        console.log(`The Received value in customerId is ${data}`);
        this.customerIdList.push(data);
    });
    this.serv.emitCustomerIdList.subscribe((data) => {
        this.customerIdList = new Array<number>();
        console.log(`The Received value in customerId list is ${data}`);
        for(let d of data){
            this.customerIdList.push(d);
        }
    });
  }

  get filteredOrders() : Array<Order> {
    this._filteredOrders = new Array<Order>();
    if (this.customerIdList.length > 0) {
       this._filteredOrders = this.orders.filter((o,i) => {
         let index = this.customerIdList.indexOf(o.CustomerId);
         if(index > -1)
            return true;
         return false;
       });
    } else {
      this._filteredOrders = this.orders;
    }
    return this._filteredOrders;
  }
}
