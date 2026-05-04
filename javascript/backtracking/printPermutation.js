function printPermutation(nums, result, temp, isVisited){
    if(nums.length === temp.length){
        result.push([...temp]);
        return;
    }

    for(let i = 0; i < nums.length; i++){
        if(!isVisited[i]){
            isVisited[i] = true;
            temp.push(nums[i]);
            printPermutation(nums, result, temp, isVisited);
            isVisited[i] = false;
            temp.pop();
        }
    }
}

const isVisited = Array.from({length: 3}).fill(false);
const result = [];
const temp = [];
printPermutation([1, 2, 3], result, temp, isVisited);
console.log(result);