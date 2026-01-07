function findPowerOfFour(n){
    let str = n.toString(4);
    let zerosAmount = str.length-1;
    return str.match(`10${zerosAmount}`) !== null;
}

console.log(findPowerOfFour(16));