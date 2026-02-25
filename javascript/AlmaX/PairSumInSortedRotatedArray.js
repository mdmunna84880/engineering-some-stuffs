// Brute Force TC-O(n) and SC-O(n)

function isPairSumExit1(nums, target){
    let set = new Set();

    for(let num of nums){
        let diff = target - num;

        if(set.has(diff)){
            return true;
        }

        set.add(num);
    }

    return false;
}

function isPairSumExit2(nums, target){
    let n = nums.length;
    let i;

    for(i = 0; i < n-1; i++){
        if(nums[i] > nums[i+1]){
            break;
        }
    }

    let left = (i+1)%n;
    let right = i;

    while(left !== right){
        let sum = nums[left] + nums[right];

        if(sum === target){
            return true;
        }else if(sum > target){
            right = (right + n - 1) % n;
        }else{
            left = (left + 1) % n;
        }
    }

    return false;
}

const arr1 = [11, 15, 8, 9, 10], target1 = 16;
const arr2 = [11, 11, 15, 26, 38, 9, 10], target2 =  35;

console.log(isPairSumExit1(arr1, target1), isPairSumExit2(arr1, target1));
console.log(isPairSumExit1(arr2, target2), isPairSumExit2(arr2, target2));