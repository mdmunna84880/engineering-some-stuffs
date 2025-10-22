function findSecondSmallest(array){
    let firstSmallest = Infinity;
    let secondSmallest = Infinity;
    // console(firstSmallest)

    for(let i = 0; i < array.length; i++){
        if(firstSmallest > array[i]){
            secondSmallest = firstSmallest;
            firstSmallest = array[i];
        }else if(secondSmallest > array[i] && firstSmallest !== array[i]){
            secondSmallest = array[i];
        }
    }

    if(secondSmallest === Infinity){
        return undefined;
    }

    return secondSmallest;
}

console.log(findSecondSmallest([3, 6, 8, 4, 9, 5]));