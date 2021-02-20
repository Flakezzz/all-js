const arr1 = [1, 5, "4", "hello"];
const arr2 = [true, 2, {}, ["a"], 222];

console.log(arr1[1] + arr2[1]);

///

arr1[4] = 22;

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);

///

for (const element of arr2) {
    console.log(element);
    console.log(typeof element);
}

///

const message = 'Welcome to Ukraine!';
const array = message.split('');
console.log(array);

console.log(array.indexOf('l'));

console.log(array.join(''));

///

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[1] = 'Класика';
console.log(styles[0]);
styles.shift();
styles.unshift('Реп', 'Реггі');
console.log(styles);

///