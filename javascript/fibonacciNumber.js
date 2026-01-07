function findFibonacciNum(num){
    if(num === 0 || num == 1){
        return num;
    }

    return findFibonacciNum(num-2) + findFibonacciNum(num-1);
}

console.log(findFibonacciNum(4));