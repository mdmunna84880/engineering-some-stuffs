function sqrtInNaive(num){
    if(num < 0) return NaN;

    if(num === 0 || num === 1){
        return num;
    }

    let k = 0;

    while(k * k <= num ){
        if(k * k === num){
            return k;
        }
        k++;
    }

    return k - 1;
}

// console.log(sqrtInNaive(10));
// console.log(sqrtInNaive(9));
// console.log(sqrtInNaive(25));

function sqrtInt(num){
    // If number is not a positive, then that will be considered as Not a number
    if(num < 0) return NaN;

    // Intially we are assuming the answer lie after start.
    let start = 0;
    // Intially we are assuming the answer lie before end.
    let end = num;

    while(start <= end){
        // Middle number of that given number
        let mid = Math.floor((end+start)/2);

        // Square of mid
        let square = mid * mid;
        
        // We know if square is equal to num means the number is that is given this square will be the answer
        if(square === num) return mid;
        // We know if we get small as square than number, then answer must lie after the start
        if(square < num) start = mid + 1;
        // We know if we get the square bigger than the number, then answer must lie before end.
        else end = mid - 1;
    }

    // If we didn't get the answer above means the answer is not integer, and the answer must be end because the start must have bigger by 1;
    return start-1;
}

console.log(sqrtInt(25))
console.log(sqrtInt(15))
console.log(sqrtInt(10))
console.log(sqrtInt(16))
console.log(sqrtInt(36))