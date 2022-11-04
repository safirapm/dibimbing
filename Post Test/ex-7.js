function wordFormatter(str){
    return str.toLowerCase().split(' ') // memisahkan string dan menjadikan semua string dalam lowercase, menggunakan return untuk mengembalikan value
    .map(function (str) { // menggunakan fungsi map untuk membuat array baru
        return (str.charAt(0).toUpperCase()) + str.slice(1);
            // charAt untuk mengembalikan value dalam string serta menjadikan awalan kata kapital semua dengan toUpperCase
            // slice untuk menghilangkan sebagian elemen dan nyalin sebagian elemen ke array baru 
      }).join(' '); // join untuk menggabungkan string yang sebelumnya dipisah
}

console.log(wordFormatter("SeLamAT PAGi semua halOo"))
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"))