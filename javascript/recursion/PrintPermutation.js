function printPermutaion(str, result){
    if(str === ""){
        console.log(result);
        return;
    }
    for(let i = 0; i < str.length; i++){
        printPermutaion(str.slice(0, i).concat(str.slice(i+1)), result + str[i]);
    }
}

printPermutaion("abc", "");