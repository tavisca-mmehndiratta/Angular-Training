class StringOperations
{
    private data: string;
    constructor()
    {
        this.data = "i have a huge group of friends at my school but my best friend’s name is Arjun. he has a round face with brown hair and eyes."
    }

    PrintIndexesAndOccurence(character : string)
    {
        let value = 0;
        for(let i=0 ;i< this.data.length; i++)
        {
            if(this.data[i].toLowerCase() == character.toLowerCase())
            {
                console.log(`string '${character}' occured at length ${i} \n`);
                value++;
            }
        }
        console.log(`string '${character}' occured ${value} times. \n`);
    }

    GetNumberOfStatements(): Array<string>
    {
        let statements = this.data.split('.');
        return statements;
    }

    PerformUpperCaseOperations()
    {
        statements = this.GetNumberOfStatements();
        statements.pop();
        let newStatements = new Array<string>();
        for(let statement of statements)
        {
            statement = statement.trim().charAt(0).toUpperCase() + statement.trim().slice(1);
            newStatements.push(statement);
        }

        console.log("Upper cased first letter of each statement.\n\n")
        newStatements.forEach(statement => {
            console.log(statement);
            console.log();
        });
    }
}

let stringOperations = new StringOperations();
stringOperations.PrintIndexesAndOccurence('a');
let statements = stringOperations.GetNumberOfStatements();
console.log(`number of statements are : ${statements.length}. \n`);
stringOperations.PerformUpperCaseOperations();