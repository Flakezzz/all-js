const countTotalSalary = function (employees) {
    const values = Object.values(employees);
    let result = 0;
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        result += element;
    }
    return result;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);