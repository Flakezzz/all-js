const calculator = {}

const read = function (a, b) {
    calculator.a = prompt('type a number');
    calculator.b = prompt('type a number');
}

const sum = function (a, b) {
    console.log(+calculator.a + +calculator.b);
}

const mult = function (a, b) {
    console.log(calculator.a * calculator.b);
}

read();
sum();
mult();