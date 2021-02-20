let product = 'Генератор захисного поля';
let price = 1000;

console.log('Обрано', product, 'ціна за штуку', price, 'кредитів');

price = 2000;

console.log('Обрано', product, 'ціна за штуку', price, 'кредитів');

///

let total = 100;
let ordered = 50;

if (total > ordered) {
    console.log('Замовлення оформлено, з вами звяжеться менеджер');
} else {
    console.log('На складі недостатньо товарів!');
}

///

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('введіть будь-ласка пароль');

if (typeof message === "object") {
    console.log('Скасовано користувачем!');
}

if (message === ADMIN_PASSWORD) {
    console.log('Ласкаво просимо!');
} else {
    console.log('Доступ заборонений, невірний пароль!');
}

alert(message);

///

const credits = 23580;
const pricePerDroid = 3000;

const droids = prompt('скільки дроїдів ви хочете купити?')

if (typeof message === "string") {
    console.log('Скасовано користувачем!');
}
const allDroids = pricePerDroid * droids;
const moneyLeft = credits - allDroids;

if (credits > allDroids) {
    console.log('Ви купили', droids, 'дроїдів, на рахунку залишилося', moneyLeft, 'кредитів.');
} else {
    console.log('Недостатньо коштів на рахунку!');
}

///

let country = prompt('введіть будь ласка назву країни')
let cost;

country = country.toLowerCase();

switch (country) {
    case 'китай':
        cost = 100;
        break;
    case 'чилі':
        cost = 250;
        break;
    case 'австралія':
        cost = 170;
        break;
    case 'індія':
        cost = 80;
        break;
    case 'ямайка':
        cost = 120;
        break;

     default:
        alert('У вашій країні доставка недоступна');
      break;
} 

console.log('Доставка в', country, 'буде коштувати', cost, 'кредитів');

///

let numbers = 0;
let input;

do{
    input =+ prompt('введіть будь ласка число');
	numbers += input;
}
while(input);

   console.log('Загальна сума чисел дорівнює', numbers);