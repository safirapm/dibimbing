function unitTest(input, output) {
    console.log(output, input === output)
 }
 
 
 function reverse(str) {
    let newStr = ""; 
    for (let i = str.length - 1; i >= 0; i--) { 
        /* titik awal loop adalah index yang paling terakhir, maka menggunakan str.length - 1
        index dimulai dari 0, menggunakan decrement i setelah iteration  */
        newStr = newStr + str[i];
    }

    return newStr.charAt(0).toUpperCase() + newStr.slice(1) + ("."); 
    /* charAt, UpperCase, slice digunakan untuk memberi kapital di huruf pertama kata
    beserta titik di akhir kata kedua.
    */ 
}

 unitTest(reverse("drow olleh"), "Hello word.")
 unitTest(reverse("eko atad"), "Data oke.")
 unitTest(reverse("gnitset tinu"), "Unit testing.")