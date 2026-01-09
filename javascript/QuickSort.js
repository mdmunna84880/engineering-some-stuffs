function quickSort(arr, si, ei){
    if(si >= ei){
        return;
    }

    let pIdx = partition(arr, si, ei);
    quickSort(arr, si, pIdx-1);
    quickSort(arr, pIdx+1, ei);
}

function partition(arr, si, ei){
    let i = si -1; 
    let pivot = arr[ei];

    for(let j = si; j < ei; j++){
        if(arr[j] <= pivot){
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    i++;

    [arr[i], arr[j]] = [arr[j], arr[i]];
    return i;
}
const arr = [6, 3, 9, 5, 2, 8, -5];
quickSort(arr, 0, arr.length-1);
console.log(arr);
