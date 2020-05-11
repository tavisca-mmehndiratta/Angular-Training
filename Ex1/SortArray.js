var SortLogic = /** @class */ (function () {
    function SortLogic() {
        this.fruits = new Array();
        this.fruits.push("mango");
        this.fruits.push("pineapple");
        this.fruits.push("apple");
        this.fruits.push("banana");
        this.fruits.push("avocado");
    }
    SortLogic.prototype.sortAndReverseFruits = function () {
        return this.fruits.sort(function (a, b) { return a.length - b.length; }).reverse();
    };
    return SortLogic;
}());
var sortLogic = new SortLogic();
var fruits = sortLogic.sortAndReverseFruits();
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit + "\n");
}
