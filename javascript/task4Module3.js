// Time Complexity: O(n)
// Space Complexity: O(1)
function linearSearch(arr, target) {

    for(let i = 0; i < arr.length; i++){
        if(target === arr[i]) return i;
    }

    return -1;

}

// Time Complexity: O(log n)
// Space Complexity: O(1);
function binarySearch(arr, target){
    let right = arr.length - 1;
    let left = 0;

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1;
}

// Time Complexity: O(n^(1/2))
// Space Complexity: O(1)

function jumpSearch(arr, target){
    let n = arr.length;
    let rootN = Math.floor(Math.sqrt(n));

    let prev = 0;
    let step = rootN;

    while(arr[Math.min(step, n)-1] < target){
        prev = step;
        step += rootN;
        if(prev >= n) return -1;
    }

    while(arr[prev] < target){
        prev++;
        if(prev >= Math.min(n, step)) return -1;
    }

    if(arr[prev] === target) return prev;

    return -1;

}

// Time Complexity: O(log i)
// Space Complexity: O(1)
function exponentialSearch(arr, target){
    let n = arr.length;
    if(arr[0] === target) return 0;

    let i = 1;

    while(i < n && arr[i] <= target){
        i *= 2;
    }

    let left = i / 2;
    let right = Math.min(n-1, i);

    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);

        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
function ternarySearch(arr, target){
    let n = arr.length;

    let left = 0;
    let right = n-1;

    while(left <= right){

        let mid1 = Math.floor(left + (right - left)/3);
        let mid2 = Math.floor(right - (right - left)/3);

        if(arr[mid1] === target) return mid1;
        else if(arr[mid2] === target) return mid2;
        else if(arr[mid1] > target) right = mid1 - 1;
        else if(arr[mid2] < target) left = mid2 + 1;
        else{
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }

    return - 1;
}

// Time Complexity: O(n)-Worst Case, O(log(log n))-Average Case
// Space Complexity: O(1)
function interpolationSearch(arr, target){
    let n = arr.length;
    let left = 0;
    let right = n-1;

    while(left <= right && target >= arr[left] && target <= arr[right]){
        if(left === right){
            if(target === arr[left]) return left;
            else return -1;
        }
        let pos = left + Math.floor((((target - arr[left])* (right - left))/(arr[right]-arr[left])));
        if(arr[pos] === target) return pos;
        else if(arr[pos] > target) right = pos - 1;
        else left = pos + 1;
    }

    return -1;
}

function searchAll(arr, target){
    const sortedArray = [...arr].sort((a, b)=> a-b);

    return {
        linear: linearSearch(arr, target),
        binary: binarySearch(sortedArray, target),
        jump: jumpSearch(sortedArray, target),
        exonential: exponentialSearch(sortedArray, target),
        ternary: ternarySearch(sortedArray, target),
        interpolation: interpolationSearch(sortedArray, target)
    }
}

let arr = Array.from({length: 100}, ()=>Math.floor(Math.floor(Math.random()*1000) + 1));
let target = Math.floor(Math.random()*1000) + 1;

console.log(searchAll(arr, target));