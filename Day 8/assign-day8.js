// Safira Paramita M. -- Assignment Day 8
// 1. Sequential search
function seqSearch (arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

let num = 12;
let nums = [10,22,67,75,80,66]

seqSearch(nums, num) ? console.log(num + " is in the array.")
                : console.log(num + " is not in the array");


// 2. Bubble Sort
function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j] > arr[j + 1]) { 
                [arr[j], arr [j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("Bubble Sort " + arr);
}
let arr = [10,22,67,75,80,66];
bblSort(arr); 

// 3. Selection Sort
function selectionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
        }
    } 
    return inputArr;
}

let inputArr = [10, 22, 67, 75, 80, 66];
selectionSort(inputArr);
console.log("Selection Sort " + selectionSort(inputArr));


// 1) Check if the number 12 is in the array
// 2) Sort the array with bubble sort
// 3) Sort the array with selection sort