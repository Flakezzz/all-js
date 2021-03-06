const logItems = function(array) {

    for(let index = 0; index < array.length; index += 1) {
        console.log(`${index + 1} - ${array[index]}`);
    }
    
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

///

const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(' ');
    const all = words.length * pricePerWord;
    return all;
};
console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); 
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  );
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  );
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  );

  ///


  const findLongestWord = function (string) {
    let words2 = string.split(' ');
    let word = words2[0];
    for(let i = 1; i < words2.length; i++) {
        if(words2[i].length > word.length) {
            word = words2[i];
        }
    }
    return word;
  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));


///

                                                  //  через масив і сплайс
let x;

const formatString = function (string) {
    const stringArray = string.split('');
    if (stringArray.length <= 40) {
      console.log(string);
    } else if (stringArray.length > 40) {
      const newArray = stringArray.splice(0, 40)
      const joinedArray = newArray.join('');
      console.log(joinedArray + '...');
    }
  };

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',));


///


const checkForSpam = function (message) {
    const spamMessage = message.split(' ');
    if (spamMessage.includes('SPAM' && 'sale')) {
        console.log(true);
    } else {
        console.log(false);
    }
  };

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
  
///


let input;
const numbers = [0];
let total = 0;

do {
  input = +prompt('type number');
  if (input === null) {
    console.log('скасовано користувачем');
    break
  }
  numbers.push(input);
} while (input);
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log('total :' + total);