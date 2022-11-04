let user = {
    name: "Jean",
    age: 25
}

// console.log(user);

user.name = "Jean Gunnhildr"
console.log(user.name);
console.log(user['age']);

let { name, age } = user;
console.log("My name is", user.name, "and my age is", user.age)
console.log(`My name is ${name} and my age is ${age}`);

// for (let prop in user) {
//     console.log(prop + ": " + user[prop]);
// }

// console.log(user);

// const student = {
//     name: 'Klee',
//     class: 2,
//     age: 6
// }

// // using for...in
// for ( let key in student ) {
//     //display the properties
//     console.log(`${key} => ${student[key]}`);
// }

// program login
// let username = '1234';
// let password = 'passw0rd';
// let user = {};

// // validate login data
// if (username === '1234' && password === 'passw0rd') {
//     user = {
//         username: username,
//         password: password
//     };
// } else {
//     user = null;
// }

// if (user != null) {
//     console.log(`Welcome ${user.username}`);
// } else {
//     console.log(`username or password is wrong`);
// }