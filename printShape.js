module.exports = {
    description: "This is lab2 assignment!",
    triangleShape: function(line){
        if (line == undefined || typeof line != "number") {
            throw "line is not a number";
        }

        if (line > 10) {
            throw "line cant be larger than 10!";
        }

        if (line <= 0){
            throw "line should be a positive number!";
        }

        if (line == 1){
            console.log(`\/\\`);
        }

        if (line == 2){ 
            console.log('\ /\\');
            console.log('\/--\\');
        }

        if (line == 3){
            console.log('\  /\\');
            console.log('\ /  \\');
            console.log('\/----\\');
        }

        if (line == 4){
            console.log('\   /\\');
            console.log('\  /  \\');
            console.log('\ /    \\');
            console.log('\/------\\');
        }

        if (line == 5){
            console.log('\    /\\');
            console.log('\   /  \\');
            console.log('\  /    \\');
            console.log('\ /      \\');
            console.log('\/--------\\');
        }
        
        if (line == 6){
            console.log('\     /\\');
            console.log('\    /  \\');
            console.log('\   /    \\');
            console.log('\  /      \\');
            console.log('\ /        \\');
            console.log('\/----------\\');
        } 
        
        if (line == 7){ 
            console.log('\      /\\');
            console.log('\     /  \\');
            console.log('\    /    \\');
            console.log('\   /      \\');
            console.log('\  /        \\');
            console.log('\ /          \\');
            console.log('\/------------\\');
        }
       
        if (line == 8){
            console.log('\       /\\');
            console.log('\      /  \\');
            console.log('\     /    \\');
            console.log('\    /      \\');
            console.log('\   /        \\');
            console.log('\  /          \\');
            console.log('\ /            \\');
            console.log('\/--------------\\');
        }
        
        if (line == 9){
            console.log('\        /\\');
            console.log('\       /  \\');
            console.log('\      /    \\');
            console.log('\     /      \\');
            console.log('\    /        \\');
            console.log('\   /          \\');
            console.log('\  /            \\');
            console.log('\ /              \\');
            console.log('\/----------------\\');
        }
        
        if (line == 10){
            console.log('\         /\\');
            console.log('\        /  \\');
            console.log('\       /    \\');
            console.log('\      /      \\');
            console.log('\     /        \\');
            console.log('\    /          \\');
            console.log('\   /            \\');
            console.log('\  /              \\');
            console.log('\ /                \\');
            console.log('\/------------------\\');
        }
    },       

    squareShape: function(line){
        if (line == undefined || typeof line != "number") {
            throw "line is not a number";
        }

        if (line > 10) {
            throw "line cant be larger than 10!";
        }

        if (line < 2) {
            throw "line cant be smaller than 2!";
        }
        
        if (line == 2){
            console.log('|--|');
            console.log('|--|');
        }    
        
        if (line == 3){
            console.log('|---|');
            console.log('|   |');
            console.log('|---|');
        }
        
        if (line == 4){
            console.log('|----|');
            console.log('|    |');
            console.log('|    |');
            console.log('|----|');
        }
        
        if (line == 5){
            console.log('|-----|');
            console.log('|     |');
            console.log('|     |');
            console.log('|     |');
            console.log('|-----|');
        }
       
        if (line == 6){
            console.log('|------|');
            console.log('|      |');
            console.log('|      |');
            console.log('|      |');
            console.log('|      |');
            console.log('|------|');
        }
       
        if (line == 7){
            console.log('|-------|');
            console.log('|       |');
            console.log('|       |');
            console.log('|       |');
            console.log('|       |');
            console.log('|       |');
            console.log('|-------|');
        }
        
        if (line == 8){
            console.log('|--------|');
            console.log('|        |');
            console.log('|        |');
            console.log('|        |');
            console.log('|        |');
            console.log('|        |');
            console.log('|        |');
            console.log('|--------|');
        }
       
        if (line == 9){
            console.log('|---------|');
            console.log('|         |');
            console.log('|         |');
            console.log('|         |');
            console.log('|         |');
            console.log('|         |');
            console.log('|         |');
            console.log('|         |');
            console.log('|---------|');
        }
        
        if (line == 10){
            console.log('|----------|');
            console.log('|          |');
            console.log('|          |');
            console.log('|          |');
            console.log('|          |');
            console.log('|          |');
            console.log('|          |');
            console.log('|          |');
            console.log('|          |');
            console.log('|----------|');
        }
    },       

    rhombusShape: function(line){
        if (line == undefined || typeof line != "number") {
            throw "line is not a number";
        }

        if (line > 10) {
            throw "line cant be larger than 10!";
        }

        if (line < 1) {
            throw "line should be positive!";
        }

        if (line == 1 || line == 3 || line == 5 || line == 7 || line == 9){
            throw "line should be an even number!"
        }

        if (line == 2){
            console.log('\/-\\');
            console.log('\\-/');
        }
            
        if (line == 4){
            console.log('\ /-\\');
            console.log('\/   \\');
            console.log('\\   /');
            console.log('\ \\-/');
        }
            
        if (line == 6){
            console.log('\  /-\\');
            console.log('\ /   \\');
            console.log('\/     \\');
            console.log('\\\     /');
            console.log('\ \\   /');
            console.log('\  \\-/');
        }
            
         if (line == 8){
            console.log('\   /-\\');
            console.log('\  /   \\');
            console.log('\ /     \\');
            console.log('\/       \\');
            console.log('\\\       /');
            console.log('\ \\     /');
            console.log('\  \\   /');
            console.log('\   \\-/');
         }

        if (line == 10){
            console.log('\    /-\\');
            console.log('\   /   \\');
            console.log('\  /     \\');
            console.log('\ /       \\');
            console.log('\/         \\');
            console.log('\\\         /');
            console.log('\ \\       /');
            console.log('\  \\     /');
            console.log('\   \\   /');
            console.log('\    \\-/');
        }
    }
}
//},

/*    divideTwoNumbers: function(numerator, denominator){
    if (numerator === undefined || typeof numerator !== "number") {
        throw "numerator is not a number";
    }
    if (denominator === undefined || typeof denominator !== "number") {
        throw "denominator is not a number";
    }
    if (denominator === 0){
        throw "denominator cannot be 0";
    }
    return numerator / denominator;
},

multiplyTwoNumbers: function(num1, num2){
    if (num1 === undefined || typeof num1 !== "number") {
        throw "num1 is not a number";
    }
    if (num2 === undefined || typeof num2 !== "number") {
        throw "num2 is not a number";
    }
    return num1 * num2;
},

subtractTwoNumbers: function(num1, num2){
  if (num1 === undefined || typeof num1 !== "number") {
        throw "num1 is not a number";
    }
    if (num2 === undefined || typeof num2 !== "number") {
        throw "num2 is not a number";
    }
    return num1 - num2;
}
};
*/

