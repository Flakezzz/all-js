const calculator = {
    functionRead : read = function (a, b) {
        calculator.a = prompt('type a number');
        calculator.b = prompt('type a number');
    },
    
    functionSum : sum = function (a, b) {
        console.log(+calculator.a + +calculator.b);
    },
    
    functionMult : mult = function (a, b) {
        console.log(calculator.a * calculator.b);
    },
};

read();
sum();
mult();