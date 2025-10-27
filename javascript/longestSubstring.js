// Approach-1
function longestSubstring1(str){
    let longest = "";

    for(let i = 0; i < str.length; i++){
        let currLongest = "";
        for(let j = i; j < str.length; j++){
            if(currLongest.includes(str[j])){
                break;
            }
            currLongest += str[j];
        }
        if(currLongest.length > longest.length){
            longest = currLongest;
        }
    }

    return longest;
}

console.log(longestSubstring1("abcdbcbb"))

// Approach-2
function longestSubstring2(str){
    let longest = "";

    let charMap = new Map();
    let start = 0;

    for(let i = 0; i < str.length; i++){
        if(charMap.has(str[i])){
            start = Math.max(start, charMap.get(str[i])+1);
        }
        charMap.set(str[i], i);

        let currLongest = str.slice(start, i+1);

        if(currLongest.length > longest.length){
            longest = currLongest;
        }

    }

    return longest;
}

console.log(longestSubstring2("abcdbcbb"))