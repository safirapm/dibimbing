// check for 19
// sequence 1
function seqSearch (arr, data) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " " + data);
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

let num = 19;
let nums = [28,82,23,32,9,19]

seqSearch(nums, num) ? console.log(num + " ada")
                : console.log(num + " ada");

// bubble-sort
function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) { 
        console.log('Index i: ', i);
        for(let j = 0; j < (arr.length - i - 1); j++) { 

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr [j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("-----------------------------\n");
    console.log("Sort " + arr);
}
let arr = [28, 82, 23, 32, 9, 19];
bblSort(arr);


