const calculator = require("./printShape");
const prompt = require("prompt"); 

function getInfo(){
    prompt.start();

    const operation = {
        name: 'operation',
        description: 'Which shape do you want to print?(triangle/square/rhombus)',     
        type: 'string',                 // Specify the type of input to expect.
        default: 'triangle',             // Default value to use if no value is entered.
        required: true                          
    };

    const linePrompt = {
        name: 'line',
        description: 'How many lines you want to print?',     
        type: 'number',                 // Specify the type of input to expect.
        required: true  
    };

   /* const num2Prompt = {
        name: 'num2',
        description: 'Which is the second number?',     
        type: 'number',                 // Specify the type of input to expect.
        required: true  
    }; */

      const quitPrompt = {
        name: 'quit',
        description: 'Do you want to quit?(T/F)',     
        type: 'boolean',                 // Specify the type of input to expect.
        required: true  
    }; 
    
    function stringToOperation(str){
        if (!str) return "triangle";

        if (str === "triangle") return "triangle";

        if (str === "square") return "square";

        if (str === "rhombus") return "rhombus";
        
        return "triangle";
    }

    // 
    // Get two properties from the user: username and email 
    // 
    prompt.get([operation, linePrompt, quitPrompt], function (err, result) {
        if (result) {
            let line = result.line;
            let quit = result.quit;
            let operation = stringToOperation(result.operation);

            //let operationFunction = undefined;

            switch (operation){
                case "triangle":
                    operationFunction = calculator.triangleShape;
                    break;
                case "square":
                    operationFunction = calculator.squareShape;
                    break;
                case "rhombus":
                    operationFunction = calculator.rhombusShape;
                    break;
            }

            let shapeResult = operationFunction(line);
            console.log(shapeResult);

    //let numericalResult = operationFunction(num1, num2);
    //console.log(`when you ${operation} ${num1} with ${num2} you get ${numericalResult}`);

        if(!quit){
            getInfo();
        }
     } else if (err) {
        console.error(err)
     }
        
    });
}

getInfo();
    // get a line of text to see what operation we're doing
    // get num1
    // get num2
    // ask if they want to quit
    // log result
    //  repeat



