const user = {}

user.userName = "Yura";
user.age = 14;

showUserName = function () {
    console.log(user.userName);
},

updateAge = function () {
    console.log(user.age += 1);
}

showUserName();
updateAge();
updateAge();
updateAge();
updateAge();