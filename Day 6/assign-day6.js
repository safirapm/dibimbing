const _ = require('lodash')

let users =[ 
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

console.log('All users', _.filter(users));
console.log('Users under 30 years old male', _.filter(users, user => user.age <30 && user.gender == "male"));
console.log('Users whose first name starts with (J)', _.filter(users, (user) => user.firstName.includes("J")));
console.log('Users whose last name starts with (D)', _.filter(users, (user) => user.lastName.includes("D")))