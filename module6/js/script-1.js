const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      id: '249b6175-5c30-44c6-b154-f120923736f5',
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
];

const getUserNames = users => {
    const names = users.map(user => user.name);
    return names;
};
  
console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => {
  const result = users.filter((user) => user.eyeColor === color);
  return result;
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

const getUsersWithGender = (users, gender) => {
  const result = users.reduce((acc, value) => {
    if(value.gender === gender) {
      acc.push(value.name)
      return acc;
    }
    return acc;
  },[])
  return result;
};
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

  const getInactiveUsers = users => {
    const result4 = users.filter((user) => user.isActive === false);
    return result4;
  };
  
  console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

  const getUserWithEmail = (users, email) => {
    const result5 = users.filter((user) => user.email === email);
    return result5;
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

  const getUsersWithAge = (users, min, max) => {
    const result6 = users.filter((user) => user.age > min && user.age < max);
    return result6;
  };
  

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

const calculateTotalBalance = users => {
  const result7 = users.map(user => user.balance);
  let sum = 0;
  const AllBalance = result7.forEach(element => {
    sum += element;
  });
  return sum;
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
    const result8 = users.filter(user => user.friends.includes(friendName));
    return result8;
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {

  const sortFn = (a, b) => a.friends - b.friends
  return users.sort();
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users => {
  const result10 = users
    .reduce((acc, user) => {
        acc.push(...user.skills);
        return acc;
    }, [])
    .reduce((acc, value) => {
      if(acc.includes(value)) {
       return acc;
      }
      return acc = [...acc, value];
    }, [])
    .sort()
    return result10;
  };
  
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]