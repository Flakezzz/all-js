const salaries = {
    John: 100 ,
    Ann: 160 ,
    Pete: 130 ,
}
let sum = 0;
function allSalaries() {
    const values = Object.values(salaries);
    for (let i = 0; i < values.length; i += 1) {
        const element = values[i];
        sum += element;
    }
    console.log(sum);
}

allSalaries();