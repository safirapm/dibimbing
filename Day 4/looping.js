// for statement
for (let i = 0; i <=5; i++) {
    console.log(i);
}

// while statement
let num = 6; // begin / inisialisasi awal
while (num < 6) { // cek konsisi dulu baru menjalankan console
    console.log(`While : The Number is ${num}`);
    num++;
}


console.log('----------');

// do while statement
do { //melakukan console dulu, lalu cek kondisi
    console.log(`Do While : The Number is ${num}`);
    num++;
} while (num < 6);