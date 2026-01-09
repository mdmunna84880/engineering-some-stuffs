function findKthLargest(arr, k){
    arr.sort((a, b)=> b-a);
    return arr[k-1];
}

function findKthLargestOptimised(arr, k){
    const targetElement = k-1;

    function quickSelect(left, right){
        if(left === right) return arr[left];

        const kthIndex = partition(arr, left, right);
    if(kthIndex === targetElement){
        return arr[kthIndex];
    }else if(kthIndex < targetElement){
        return quickSelect(kthIndex+1, right);
    }else{
        return quickSelect(left, kthIndex-1);
    }
    }
    return quickSelect(0, arr.length-1);
}


function partition(arr, si, ei){
        let i = si-1;
        let pivot = arr[ei];

        for(let j = si; j < ei; j++){
            if(pivot <= arr[j]){
                i++;
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }

        i++;

        [arr[ei], arr[i]] = [arr[i], arr[ei]];

        return i;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargest([9, 8, 7, 6, 5, 4], 4)); // Output: 6
console.log(findKthLargestOptimised([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargestOptimised([9, 8, 7, 6, 5, 4], 4)); // Output: 6