import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/app.models';
import { Customers } from '../../models/app.constants';
import { CustomerOrderService } from '../../services/app.customerorder.service';

@Component({
  selector: 'app-customer-component',
  template: `
     <div class="container"> 
        <table class="table table-striped table-bordered table-dark">
            <thead>
                <tr>
                    <th>Customer Id</th>
                    <th>Customer Name</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let c of getFilteredCustomers" (click)="getSelectedRow(c)">
                    <td>{{c.CustomerId}}</td>
                    <td>{{c.CustomerName}}</td>
                    <td>{{c.City}}</td>
                    <td>{{c.Email}}</td>
                    <td>{{c.ContactNo}}</td>
                </tr>
            </tbody>
        </table>
    </div>   
  `
})

export class CustomerComponent implements OnInit {
  customer: Customer;
  customers = Customers;
  searchString: string;
  _filteredCustomers: Array<Customer>;
  _customerIdList: Array<number>;
  constructor(private serv: CustomerOrderService) {
    this.customer = new Customer(0,"","","",0);
    this._filteredCustomers = new Array<Customer>();
    this._customerIdList = new Array<number>();
    this.searchString = "";
  }

  ngOnInit() { 
    this.serv.emitSearchString.subscribe((data) => {   
    this._customerIdList = new Array<number>();
        console.log(`The search string value is ${data}`);
        this.searchString = data;
    });
  }


  getSelectedRow(c: Customer): void {
      this.customer = c;
      this.serv.onEmitCustomerId(this.customer.CustomerId);
  }

  get getFilteredCustomers() : Array<Customer>{
    this._filteredCustomers = this.customers.filter(cst => this.checkifDataExists(cst, this.searchString));
    if(this._filteredCustomers.length > 0)
    {
        for(let cst of this._filteredCustomers){
            console.log("customer id in filtered customers is : " + cst.CustomerId)
            this._customerIdList.push(cst.CustomerId);
        }
        this.serv.onEmitCustomerIdList(this._customerIdList);
        return this._filteredCustomers;
    }
    return this.customers;
  }

    checkifDataExists(cst: Customer, searchQuery: string) : boolean
    {
      if(searchQuery.length > 0)
      {
        if(cst.CustomerName.toLowerCase().includes(searchQuery.toLowerCase()) 
        || cst.City.toLowerCase().includes(searchQuery.toLowerCase()) 
        || cst.Email.toLowerCase().includes(searchQuery.toLowerCase())
        || cst.CustomerId === parseInt(searchQuery)
        || cst.ContactNo === parseInt(searchQuery))
        {
            console.log("returned true");
            return true;
        }
    }
      
      console.log("returned false");
      return false;
    }
}
