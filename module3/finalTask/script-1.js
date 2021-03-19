
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

const mood = function () {
      user.mood = 'happy'; 
}

const hobby = function () {
    user.hobby = 'skydiving'; 
}

const premium = function () {
    user.premium = false; 
}

mood();
hobby();
premium();

const userData = Object.entries(user);

for (const element of userData) {
    const key = element[0];
    const value = element[1];
  
    console.log(`${key}: ${value}`);
}