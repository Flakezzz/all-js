const num = prompt('введіть число');
if (num > 54 && num < 100) {
    console.log('число попадає в діапазон');
    
} else {
    console.log('число не попадає в діапазон');
}

///

const age = 55;

if (age > 0 && age < 17) {
    console.log('ви належите до групи діти');
}

if (age > 16 && age < 61) {
    console.log('ви належите до групи дорослі');
}

if (age > 60 && age < 101) {
    console.log('ви належите до групи пенсіонери');
}

///

const  firstName = 'Юрій';
const  surName = 'Весній';

if (firstName.length >= 4 && surName.length >= 5) {
    
    console.log(firstName.length + surName.length);
    
} else {
    console.log('УПС');
}

///

let k = 1;

let randomNumber = Math.random() * (( 5 - 1 ) + 1);
randomNumber = Number.parseInt(randomNumber);

if (randomNumber === 0) {
    console.log(randomNumber + 1)
} else {
    if (randomNumber === 1) {
        console.log(randomNumber);
    } else {
        if (randomNumber === 2) {
            console.log(randomNumber);
        } else {
            if (randomNumber === 3) {
                console.log(randomNumber);
            } else {
                if (randomNumber === 4) {
                    console.log(randomNumber);
                } else {
                    if (randomNumber === 5) {
                        console.log(randomNumber);
                    } else {
                        
                    }
                }
            }
        }
    
    } 
}

///

let lang = 'fr';
let mounth;

switch (lang) {
    case 'ua':
        mounth = 'Січень';
        break;
    case 'en':
        mounth = 'January';
        break;
    case 'ru':
        mounth = 'Январь';
        break;
    case 'fr':
        mounth = 'Janvier';
        break;

     default:
         console.log('немає такої мови');
      break;
} 

console.log(mounth);