import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Logic } from '../../models/app.logic';

// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }

  static checkUniqueId(logic: Logic): ValidatorFn {
    return (ctrl: AbstractControl): any => {
        let products = logic.getProducts();
        for(let prd of products){
          if(prd.ProductId === parseInt(ctrl.value)){
            return {notunique: true};
          }
        }
        return null;
    };
  }

}
