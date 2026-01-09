function findSquareOfNonDecreasing(arr){
    const res = [];

    let left = 0;
    let right = arr.length -1;
    let idx = right;

    while(left <= right){
        let leftValueSq = arr[left]*arr[left];
        let rightValueSq = arr[right]*arr[right];

        if(leftValueSq < rightValueSq){
            res[idx] = rightValueSq;
            right--;
        }else{
            res[idx] = leftValueSq;
            left++;
        }
        idx--;
    }

    return res;
}

console.log(findSquareOfNonDecreasing([-4, -2, 0, 2, 4]))
console.log(findSquareOfNonDecreasing([-5, -3, -1, 0, 2, 4, 6]))