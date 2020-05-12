import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }

    getProducts(): Array<Product> {
      return this.products;
    }

    saveProducts(prd: Product): Array<Product> 
    {
      let index = this.returnIndexofTheProduct(prd)
      console.log(`Index is : ${index}`);
      if(index > -1)
      {
        //update item
        this.products[index] = prd;
      }
      else
      {
        //add item
        this.products.push(prd);
      }
      return this.products;
    }

    removeProduct(p: Product) : Array<Product> 
    {
      this.products = this.products.filter(product => product != p);
      return this.products;
    }

    returnIndexofTheProduct(prd: Product) : number
    {
      return this.products.findIndex(p => p.ProductId == prd.ProductId);     
    }

    getFileredProductsBasedOnSearchQuery(searchQuery: string) : Array<Product>
    {
      let prds = this.products.filter(prd => this.checkifDataExists(prd, searchQuery));
      if(prds != null)
        return prds;
      return this.products;
    }

    checkifDataExists(prd: Product, searchQuery: string) : boolean
    {
      if(prd.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) || prd.Category.toLowerCase().includes(searchQuery.toLowerCase()))
      {
        console.log("returned true");
        return true;
      }
      
      console.log("returned false");
      return false;
    }
}
