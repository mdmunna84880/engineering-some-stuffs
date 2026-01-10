function findIntersection(nums1, nums2){
    let res = [];

    for(let num1 of nums1){
        for(let num2 of nums2){
            if(num1 === num2 && !res.includes(num1)){
                res.push(num1);
            }
        }
    }
    
    return res;
}

function findIntersectionOptimised(nums1, nums2){
    let set = new Set(nums2);
    let res = [];

    for(let num of nums1){
        if(set.has(num) && !res.includes(num)){
            res.push(num);
        }
    }

    return res;
}

console.log(findIntersection([1, 2, 2, 1], [2, 2]));
// Output: [2]

console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4]));
// Output: [4, 9]
console.log(findIntersectionOptimised([1, 2, 2, 1], [2, 2]));
// Output: [2]

console.log(findIntersectionOptimised([4, 9, 5], [9, 4, 9, 8, 4]));
// Output: [4, 9]

