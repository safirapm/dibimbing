// // Case : age classification

// // if : hanya untuk satu kondisi saja
// let name = 'Pratama';
// let age = 35;
// if (name === 'Niko') {
//     console.log("My Name is Niko");
// }

// // if else : hanya untuk 1 kondisi dan 1 untuk set default value / output / jalan terakhir
// if (age <= 10) {
//     console.log('kids');
// } else {
//     console.log("Adults");
// }

// // Code After if
// console.log('a');

// // else if : bisa untuk lebih dari dua kondisi
// if (age < 10) {
//     console.log("Kids");
// } else if (age >= 10 && age <=30) {
//     console.log("Adults");
// } else {
//     console.log("Olds");
// }

// // nested if (if bersarang)
// if (name === 'Fiqri') {
//     if(age >= 18) {
//         console.log("This Is Fiqri");
//     } else {
//         console.log("Another");
//     }
// } else {
//     console.log("Who am I?");
// }

// ternary operators
// voteable case
// let name = "Kici";
// let age = 20;
// let voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable);

// // nested ternary operators
// (name = 'Kici') ?
//     (age < 18) ? console.log("Kici too young") : console.log("Kici old enough")
//         : console.log('another');


// klasifikasi nilai
let ketNilai = '';
let nilai = 80;

// note = pointing atau patokan untuk perbandingan
// switch (true) {
//     case nilai == 100 :
//         ketNilai = "A";
//     break;
//     case nilai >= 20 && nilai <= 50 :
//         ketNilai = "D";
//     break;
//     default :
//         ketNilai = "unknown";
//     break;
// }

switch (nilai) {
    case 100:
            ketNilai = "A";
        break;   
    case 90:
            ketNilai = "B";
        break;
    case 80:
            ketNilai = "C";
        break;
    default:
            ketNilai = "unknown";
        break;     
}
console.log("Nilai = ", ketNilai);

