function removeConsecutive(str){
    let result = "";

    for(let i = 0; i < str.length; i++){
        if(i === 0){
            result += str[i];
        }else if(result[result.length-1] !== str[i]){
            result += str[i];
        }
    }

    return result;
}

console.log(removeConsecutive("aabb"));
console.log(removeConsecutive("aabaa"));