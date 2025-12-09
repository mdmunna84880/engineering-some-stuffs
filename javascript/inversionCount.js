function countInversion(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] > arr[j]){
                count++;
            }
        }
    }

    return count;
}

console.log(countInversion([5, 4, 3, 2, 1]))