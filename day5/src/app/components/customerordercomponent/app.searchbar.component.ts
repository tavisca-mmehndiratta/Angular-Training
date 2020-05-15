import { Component, OnInit } from '@angular/core';
import { CustomerOrderService } from 'src/app/services/app.customerorder.service';
@Component({
    selector: 'app-searchbar-component',
    template: `
        <div class="container active-cyan-4 mb-4">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search" [(ngModel)]="searchText" (input)="filteredResultBasedOnSearch()">
        </div> 
    `
  })

  export class SearchBarComponent implements OnInit {
      searchText: string;
    constructor(private serv: CustomerOrderService) {
        this.searchText = "";
    }
  
    ngOnInit() { }

    filteredResultBasedOnSearch() : void{
        console.log(this.searchText);
      this.serv.onEmitSearchString(this.searchText);
    }
}