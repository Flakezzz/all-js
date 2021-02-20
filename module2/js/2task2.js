const hello1 = function() {
    console.log("Привіт JavaScript");
};

hello1();

///

const name1 = prompt('введіть імя');

const hello2 = function() {
    console.log('Привіт,', name1);
};

hello2();

///

const mul = function(n, m) {
    console.log(n * m);
    console.log(n + m);
    console.log(n - m);
};

mul(4, 2);

///

const myNewArrowFunction = (...array1) => {
    console.log(array1);
};

const array1 = Array.from(myNewArrowFunction);

myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

///
let num;
const array = [93, 99, 93, 96];

const myAverageScore = function() {
    num = (array[0] + array[1] + array[2] + array[3]) / 4;
};

myAverageScore();

if (num >=91 && num <= 100) {
    console.log('My average score: A');
} else if (num >=81 && num <= 90) {
    console.log('My average score: B');
} else if (num >=71 && num <= 80) {
    console.log('My average score: C');
} else if (num <= 70) {
    console.log('My average score: D');
};
