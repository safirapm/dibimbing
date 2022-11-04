const array = [31, 9, 54, 11, 43, 6, 67]
let max = array[0]
let min = array[0]

function maxMin(array) {

    for (let i = 0; i < array.length; i++) {
    if(array[i] >= max) {
        max = array[i];
    }
    for (let i = 0; i > array.length; i++) {
    if(array[i] < min) {
        min = array[i];
    }
    }
    return(max, min)
}
};

console.log(maxMin([array]))