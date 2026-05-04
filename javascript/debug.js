var reverseWords = function(s) {
    const trimmedWords = s.trim().split(" ");
    let n = trimmedWords.length;
    let result = trimmedWords[n-1];
    for(let i = n-2; i >= 0; i--){
        if(!/^\s+$/.test(trimmedWords[i])){
            bresult += " "+trimmedWords[i];
        }
    }
    return result;
};
console.log(reverseWords("a good   example")); // Output: "example good a"