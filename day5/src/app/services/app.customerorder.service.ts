import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {
  // the event that will be emitted by sender and
  // will be subscribed by the receiver
    emitCustomerId: EventEmitter<number>;
    emitSearchString: EventEmitter<string>;
    emitCustomerIdList: EventEmitter<Array<number>>;
    constructor(){
       this.emitCustomerId = new EventEmitter<number>();
       this.emitSearchString = new EventEmitter<string>();
       this.emitCustomerIdList = new EventEmitter<Array<number>>();
    }
    // method that emits event. This method will be called
    // by sender
    onEmitCustomerId(customerId: number): void {
        this.emitCustomerId.emit(customerId);
    }

    onEmitSearchString(searchString: string): void{
        this.emitSearchString.emit(searchString);
    }

    onEmitCustomerIdList(customerIdList: Array<number>) : void{
      this.emitCustomerIdList.emit(customerIdList);
    }
}