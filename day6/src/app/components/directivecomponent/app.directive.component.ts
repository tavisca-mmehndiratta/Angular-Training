import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-directive-component',
  template:`
    <input type="text" [prdId]="prdId" [(ngModel)]="prdId">
  `

})
export class ColorDirectiveComponent implements OnInit {
  prdId: string;
  constructor() {
    this.prdId = '';
  }
  selectColor(prdId: string): void {
     this.prdId = prdId;
  }
  ngOnInit(): void { }
}
