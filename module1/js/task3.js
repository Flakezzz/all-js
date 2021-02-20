const k1 = "5px";

const k2 = "12djd334";

const k3 = "12.45asdwe12";

const k4 = "qwqweeewq";

console.log(Number.parseInt(k1));

console.log(Number.parseInt(k2));

console.log(Number.parseInt(k3));

console.log(Number.parseInt(k4));

///

console.log(Number.parseFloat(k1));

console.log(Number.parseFloat(k2));

console.log(Number.parseFloat(k3));

console.log(Number.parseFloat(k4));

///

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

///

console.log(Math.random() * (19 - 3) + 3);

///

const result = 5 + 5 + '5';

console.log(result);

console.log(typeof result);

///
const email = "jura.vj8@gmail.com";

console.log(email.includes('@'));
console.log(email.length);

///

const word1 = "My "
const word2 = "name "
const word3 = "is "

const fullName = word1 + word2 + word3 + "Victor";

console.log(fullName);

///

const userName = "Юрію";
const payment = 500;

alert("Дякуємо, " + userName + "!" + " До сплати " + payment + " гривень");