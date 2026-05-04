var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;
    if(s === goal) return true;
    let n = s.length;
    let temp = ""

    for(let i = 0; i < n; i++){
        temp =  s.slice(i) + s.slice(0, i);
        console.log(temp)
        if(temp === goal) return true;
    }

    return false;
};

let s ="abcde";
let goal = "cdeab";
rotateString(s, goal);