let chars = ["Maki", "Jean", "Yoimiya"];

// // Creates a new array by performing a function on each array element

chars.map((val) => {
    console.log(val);
})

let charsMap = chars.map((char, i) => {
    if (i == 0) {
        char = "Yae Miko"
    }
    return char;
});

console.log ("------------");

console.log('use map')
console.log('initial', chars);
console.log('map', charsMap);

console.log("----------");

// console.log("use forEach");
// chars.forEach((char, i) => {
//     console.log(char + " " + i);
// });

// console.log("------------");

// let allowedChars = ['Maki', 'Jean'];

// creates a new array with all the elements that satisfy the condition mentioned in the function
// let charsFilter = chars.filter(char => char !== 'Yoimiya' && char !== 'Maki'); // pakai logika and (&&) utk >1 value
// console.log('initial', chars);
// console.log('Filter : ', charsFilter);

// let cars = ["Volvo", "Tesla", "BMW"];

// // method returns a boolean value (true/false) based
// //  on at least one element in the array passing the condition in the function
// let someIsVolvo = cars.some(car => car == "Volvo");
// console.log(someIsVolvo);

// // method detects if every element of
// // the array satisfies the condition passed in the function
// let arrayIsValid = cars.every(car => car == "BMW"); // every buat mencocokkan SELURUH value, kalau some itu SALAH SATU value.
// console.log(arrayIsValid);