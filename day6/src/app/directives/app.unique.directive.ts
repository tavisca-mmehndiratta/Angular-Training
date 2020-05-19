import {Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';
import { HttpService } from '../services/app.htttp.service';
import { ProductData } from '../models/app.product';

@Directive({
    selector: '[prdId]'
  })

  export class UniqueDirective{
  
    constructor(private ele: ElementRef, private renderer: Renderer2, private serv: HttpService){
    }
    @Input('prdId') prdId: string;
    checkUnique(prdId: string): void{
        this.serv.get().subscribe((data) => {
            console.log(JSON.stringify(data));
            data.forEach(prd => {
                if(prd.ProductId == prdId){
                    this.renderer.setStyle(this.ele.nativeElement,
                        'border',
                        '2px solid #FF0000');
                }
            });
         }, (error) => {
           console.log(`error in response ${error}`);
         });
    }

    @HostListener("blur")
  onBlur(): void {
    this.checkUnique(this.prdId);
  }
  @HostListener("focus")
  onFocus() {
    this.renderer.setStyle(this.ele.nativeElement, 'border','1px solid black');
  }
  }