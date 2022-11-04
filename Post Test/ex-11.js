function charCount(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) { 
        str.toLowerCase().split('').forEach(function(char) {
            count[char] ? count[char]++ : count[char] = 1;
        });
        return count;
    }
}
    console.log(charCount("Dibimbing di"))
    console.log(charCount("Software"))
    console.log(charCount("Frontend"))