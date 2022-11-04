let arr1 = [3,5,6,8,9];
let arr2 = [1,3,5,7];
let binarySearch = function(arr)
{
    let start = 0, end = arr1.length-1;
        let mid = Math.floor((start + end)/2);
        console.log("Array : " + [arr1] + " the middle value is " + arr1[mid]);
        console.log("Array : " + [arr2] + " the middle value is " + arr2[mid - 1]);
}
binarySearch(arr1, arr2)