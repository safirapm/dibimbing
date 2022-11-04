function removeDuplicates(str) {
    let uniqueArr = []; // menggunakan unique array untuk remove duplicates
    for(i=0; i < str.length; i++){ 
        if(uniqueArr.indexOf(str[i]) === -1) { // indexOf untuk mengembalikan index dari elemen pertama dalam array 
            uniqueArr.push(str[i]); // menggunakan push untuk mmengembalikan elemen yang telah ditambahkan 
        } 
    }
    return uniqueArr; // menggunakan mengembalikan nilai dan supaya hasil tidak 'undefined'
    }
    
    console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"))
    console.log(removeDuplicates("RRRRROOOAAQPPP"))