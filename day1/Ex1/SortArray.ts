class SortLogic {
    private fruits: Array<string>;
    constructor(){
        this.fruits = new Array<string>();
        this.fruits.push("mango");
        this.fruits.push("pineapple");
        this.fruits.push("apple");
        this.fruits.push("banana");
        this.fruits.push("avocado");
    }
    SortAndReverseFruits(): Array<string> {
        return this.fruits.sort((a, b) => a.length - b.length).reverse();
    }
}

let sortLogic = new SortLogic();
let fruits = sortLogic.SortAndReverseFruits();
for(let fruit of fruits){
    console.log(fruit + "\n");
}