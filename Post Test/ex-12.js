function sockMerchant(num) {
    let pair = {};
    for (let i = 0; i < num.length; i++) {
        num.forEach(function(sock) {
            pair[sock] ? pair[sock]++ : pair[sock] = 1;
        })

    return Object.values(pair).reduce((acc, curr) => { 
        acc += Math.floor(curr / 2)
        return acc;
        }, 0);
        }
}
console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]))
console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]))