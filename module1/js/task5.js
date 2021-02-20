let num = 1;

while (num <= 10) {
    console.log(num);
    num += 1;
}

///

const number = 10;

for (let i = 1; i < number; i += 1) {
    if (i % 2 === 1) {
      continue;
    }
  
    console.log('парні числа', i);
}

for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
      continue;
    }
  
    console.log('Непарні числа', i);
}

///

let num2 = 20;

while (num2 <= 28) {
    console.log(num2);
    num2 += 1;

}

///

let heroName;

let i;


do {
    heroName = prompt('please type your hero name');
    i = heroName.length;
    console.log(heroName);
} while (i <= 5);