// // function
// // program to print a text
// // declaring a function
// function greet() {
//     console.log('Hello There!');
// }
// // calling the function
// greet();

// // function parameter
// // program to print the text
// // declaring a function
// function greetWithParameters(name) {
//     console.log(`Hello ${name} :)`);
// }

// // variable name can be different
// let name = "Pratama"
// // calling function
// greetWithParameters(name);

// // function return
// // program to add two numbers
// // declaring a function
// function add(a,b) {
//     console.log(a);
//     console.log(b);
//     return a + b;
// }

// // take input from the user
// let number1 = 70;
// let number2 = 50;

// // calling function
// let result = add(number1,number2);

// // display the result
// console.log("The sum is " + result);

// // function expression
// // program to find the square of a number
// // function is declared inside the variable
// let multiplication = function (num) { return num * num };
// // console.log(multiplication(4));

// // can be used as varaible value for other variables
// let result = multiplication(3);
// console.log(result);

// // arrow function
// let greetArrow = () => console.log('Hello');
// // greatArrow(); // Hello

// // x is pram
// let greetArrowWithParam = x => console.log(x)
// greetArrowWithParam ('Hello'); // Hello

// let multiplication2 = (num1, num2) => num1 * num2;

// console.log(multiplication2(2,4));

// //callback function
// // function
// let greetCallback = (callback, name) => {
//     callback();
//     console.log('Hi' + ' ' + name);
// }

// // callback function
// let callMe = () => {
//     console.log('I am callback function');
// }

// let showFiqri = () => console.log('Fiqri');

// // passing function as an argument or param
// greetCallback(callMe, 'Peter');

// greetCallback(showFiqri, 'Fiqri');

// program that shows the dealy in execution
// function greetTimeout() {

// }

//  program that shows the delay in execution
function greetTimeout() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function

// kode akan berjalan setelah beberapa detik sesuai waktu yang ditentukan
setTimeout(greetTimeout, 2000);
sayName('John');

function displayHello() {
    console.log("Hello");
  }

// kode berjalan beberapa detik sekali sesuai waktu yang ditentukan
let interval = setInterval(() => {
    if (true) {
        displayHello();
        clearInterval(interval);
    }
}, 100);