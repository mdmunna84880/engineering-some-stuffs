function findFirstOccurance(nums, target){
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);

        if(nums[mid] === target && (mid === 0 || nums[mid-1] !== target)){
            return mid;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1;
}

console.log(findFirstOccurance([2, 4, 6, 6, 6, 8, 10], 6));