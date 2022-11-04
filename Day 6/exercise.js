
// code exercise day 6

let calculator = (symbol, num1, num2) => {
    switch (symbol) {
        case "*" : return num1 * num2;
        case "-" : return num1 - num2;
        case "/" : return num1 / num2;
        case "**" : return num1 ** num2;
        case "%" : return num1 % num2;
    }
}

// 1. multiplication
console.log(calculator("*", 10, 5));

// 2. substraction 
console.log(calculator("-", 10, 5));

// 3. division 
console.log(calculator("/", 10, 5));

// 4. exponentation 
console.log(calculator("**", 10, 5));

// 5. modulus 
console.log(calculator("%", 10, 5));