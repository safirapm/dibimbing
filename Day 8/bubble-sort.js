// creating the bblSort function
function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) { // 3 kali perulangan
        // Last i elements are already in place
        console.log('Index i: ', i);
        for(let j = 0; j < (arr.length - i - 1); j++) { //sisa dari jumlah array / indexOfLastUnsortedElement
            // checking if the item at present iteration
            // is greater than the next iteration
            console.log('index of last unsort: ', (arr.length -i - 1)); //indexOfLastUnsortedElement
            console.log('index j: ', j);
            console.log('val arr[j]: ', arr[j]);
            console.log('val arr[j+1]: ', arr[j + 1]);
            console.log('condition: ', arr[j] > arr[j + 1]);
            console.log("--------------------------\n");

            if (arr[j] > arr[j + 1]) {
                // if the condition is true then swap them
                // best practice for swap value
                [arr[j], arr [j + 1]] = [arr[j + 1], arr[j]];
            }
            console.log(arr);
        }
    }
    // Print the sorted array
    console.log("-----------------------------\n");
    console.log(arr);
}
// Unsorted array
let arr = [67, 24, 30];
// Now pass this array to the bblSort () function
bblSort(arr);

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);