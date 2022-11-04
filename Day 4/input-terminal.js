const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Program Determined even or odd number');

readline.question('Input Number : \n', number => {
    if (number % 2 == 0) {
        console.log(`${number} Is Even Number`);
    } else {
        console.log(`${number} Is Odd Number`);
    }
    readline.close();
});
























// // ternary operators
// // voteable case
// let name = 'Pratama';
// let age = 22;
// let voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable);

// // nested ternary operators
// (name == 'Fiqri') ? 
//     (age < 18) ? console.log("Fiqri Too young") : console.log("Fiqri Old enough") 
//         : console.log('another');


// klasifikasi nilai
// let ketNilai = '';
// let nilai = 90;

// note = pointing atau patokan untuk perbandingan
switch (true) {
    case nilai == 100 :
        ketNilai = "A";
    break;
    case nilai >= 20 && nilai <= 50:
        ketNilai = "D";
    break;
    default :
        ketNilai = "unknwon";
    break;
}

switch (nilai) {
    case 100:
            ketNilai = "A";
        break;
    case 90:
            ketNilai = "B";
        break;
    case 80:
            ketNilai= "C";
        break;
    default:
            ketNilai = "Unknown"
        break;
}
console.log("Nilai = ", ketNilai);


let day = '';
console.log("day : ", new Date().getDay());
switch (new Date().getDay()) { // base on expression
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default: // similiar with else
      day = "Unknown Day";
    break;
}
console.log("The Day Is : ", day);