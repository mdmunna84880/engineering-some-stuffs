function sqrtIntNaive(num){
    let i = 1;

    while(i * i <= num){
        i++;
    }

    return i-1;
}

function sqrtInt(num){
    let low = 1;
    let high = num;
    let ans = 0;

    while(low <= high){
        let mid = Math.floor((high + low)/2);
        if(mid * mid === num){
            return mid;
        }else if(mid * mid < num){
            low = mid + 1;
            ans = mid;
        }else{
            high = mid - 1;
        }
    }

    return ans;
}

console.log(sqrtInt(9));   // 3
console.log(sqrtInt(15));  // 3
console.log(sqrtInt(1));