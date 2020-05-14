import {Component, OnInit, Input}from '@angular/core';

@Component({
    selector: 'app-dropdown-directive',
    templateUrl: './dropdown.directive.view.html'
})

export class DropDownDirectiveComponent implements OnInit{
    private _DataSource: Array<any>;
    record: string;
    constructor() {
        this._DataSource = new Array<any>();
        this.record = "";
    }
    @Input()
  set DataSource(val: Array<any>) {
     if(val.length > 0) {
       this._DataSource = val;
     } else {
      this._DataSource = new Array<any>();
     }
  }

  get DataSource(): Array<any> {
    return this._DataSource;
  }

  ngOnInit(): void { }
}