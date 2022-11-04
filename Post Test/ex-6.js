function manipulateString(str) {
    let arr = Array.from(str); // Array.from memasukkan string pada line 17 & 18 untuk menjadi array
    let count = 0;
    for (let i = 1; i < str.length; i++) {
        if (toUpperCase(str[i]) === true) { 
            arr.splice((i + count),0,' ') // menggunakan splice dengan value spasi kosong
            count++; 
        }
    }
    return arr.join('').toString(); // menggunakan fitur join sebagai separator  
}

function toUpperCase(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str); // untuk mencari nilai uppercase (huruf kapital) sebagai pemisah antar kata dengan pengkondisian  
 }

console.log(manipulateString("SelamatPagiDunia"))
console.log(manipulateString("AkuSukaJavascript"))
