function fibonacci(n){
let fib = [0, 1]; // menggunakan angka 0,1 untuk memulai fibonacci sequence
for(let i=fib.length; i <= 20; i++) { // menggunakan perulangan  dimana index mencapai 20
    fib[i] = fib[i-2] + fib[i-1]; // menggunakan rumus fibonacci (f(n-2) + f(n-1))
}
console.log(...fib); // menggunakan titik 3 (spread syntax) untuk menggabungkan array (menghilangkah [...])
}

fibonacci(20)
