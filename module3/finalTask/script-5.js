const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];

  const names = [];
  const prices = [];
  const quantities = [];
  const noneedArray = [];
  
  const getAllPropValues = function (_arr, prop) {
        if (prop === 'name') {
            for (const i of products) {
                names.push(i.name);
            }
            console.log(names);
        } else if (prop === 'price') {
            for (const i of products) {
                prices.push(i.price);
            }
            console.log(prices);
        } else if (prop === 'quantity') {
            for (const i of products) {
                quantities.push(i.quantity);
            }
            console.log(quantities);
        } else {
            console.log(noneedArray);
        }
        
}

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []