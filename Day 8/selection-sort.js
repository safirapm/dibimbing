function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the element of array
        let min = i;// awal ditampung itu index ke 0
        console.log('i1', i);
        for(let j = i+1; j < n; j++){

            console.log('Min Index : ', min);
            console.log('i2', i);
            console.log("arr j ", inputArr[j]);
            console.log("min " ,inputArr[min]);
            console.log('val ', inputArr[j] < inputArr[min]);
            console.log("---------------------------------------\n");

            if(inputArr[j] < inputArr[min]) { // berubah menjadi index j
                min=j;
                console.log('Min After Validating : ', min); 
            }
         }

         if (min != i) {
            console.log('Swapping Element Array : ', min , i);
             // Swapping the elements
            // best practice for swap value
            [inputArr[i], inputArr[min]] = [inputArr[min], inputArr[i]]
        }
        console.log(arr);
    }
    return inputArr;
}

let arr = [8,3,2];

console.log(selectionSort(arr));