var StringOperations = /** @class */ (function () {
    function StringOperations() {
        this.data = "i have a huge group of friends at my school but my best friend’s name is Arjun. he has a round face with brown hair and eyes.";
    }
    StringOperations.prototype.PrintIndexesAndOccurence = function (character) {
        var value = 0;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].toLowerCase() == character.toLowerCase()) {
                console.log("string '" + character + "' occured at length " + i + " \n");
                value++;
            }
        }
        console.log("string '" + character + "' occured " + value + " times. \n");
    };
    StringOperations.prototype.GetNumberOfStatements = function () {
        var statements = this.data.split('.');
        return statements;
    };
    StringOperations.prototype.PerformUpperCaseOperations = function () {
        statements = this.GetNumberOfStatements();
        statements.pop();
        var newStatements = new Array();
        for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
            var statement = statements_1[_i];
            statement = statement.trim().charAt(0).toUpperCase() + statement.trim().slice(1);
            newStatements.push(statement);
        }
        console.log("Upper cased first letter of each statement.\n\n");
        newStatements.forEach(function (statement) {
            console.log(statement);
            console.log();
        });
    };
    return StringOperations;
}());
var stringOperations = new StringOperations();
stringOperations.PrintIndexesAndOccurence('a');
var statements = stringOperations.GetNumberOfStatements();
console.log("number of statements are : " + statements.length + ". \n");
stringOperations.PerformUpperCaseOperations();
