const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

let result = 0;

const calculateTotalPrice = function (allProdcuts, productName) {
    for (const i of products) {
        if (productName === i.niame) {
            result = i.price * i.quantity;
        }
    }
    return result;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроїд'));