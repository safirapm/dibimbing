let vowels = ['a', 'i','u','e','o'] // vokal

function countVowels (str, vowels) {
    let count = 0; // untuk loop

    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) { // Menggunakan includes untuk melihat apakah terdapat elemen vowel dalam string 
            count++; // ++ increment untuk penghitungan value
        } 
    }
return count;
}
    console.log(countVowels("Selamat Pagi Duniaa!!", vowels));
    console.log(countVowels("aku suka ngoding", vowels));