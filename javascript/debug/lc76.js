/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let m = s.length;
    let n = t.length;
    
    if(n > m) return "";

    const freq = new Map();

    // Counting the character count
    for(let ch of t){
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    const minWindow = [0, Infinity];
    let startingIdx = 0;
    let targetCharRemaining = n;//How many character is remaing to check in the window

    for(let end = 0; end < m; end++){
        if(freq.has(s[end]) && freq.get(s[end]) > 0){
            targetCharRemaining--;
        }

        freq.set(s[end], (freq.get(s[end]) || 0)- 1);

        if(targetCharRemaining === 0){
            while(true){
                let startChar = s[startingIdx];
                // Leave the loop since it is confirmed that we have got the minimum target string in the current window
                if(freq.has(startChar) && freq.get(startChar) === 0){
                    break;
                }
                // Increase the starting windows since it is not in the target string
                startingIdx++;
                freq.set(startChar, (freq.get(startChar) || 0)+1);
            }

            // Checking whether the current windows minimum or not
            if(end - startingIdx < minWindow[1] - minWindow[0]){
                minWindow[1] = end;
                minWindow[0] = startingIdx;
            }

            freq.set(s[startingIdx], (freq.get(s[startingIdx]) || 0)+1)//Setting 1 for next windows 
            targetCharRemaining++;//Checking for next one remaing character
            startingIdx++;//Leaving the current windows and starting by increasing 1
        }
    }

    return minWindow[1] < m ? s.slice(minWindow[0], minWindow[1]+1) : "";
};

console.log(minWindow("ADOBECODEBANC", "ABC"));//Output: "BANC"
