function printAllPath(sr, sc, er, ec, result, vis){
    if(sr < 0 || sc < 0 || sc > ec || sr > er) return;
    if(vis[sr][sc]) return;
    if(sr === er && sc === ec){
        console.log(result);
        return;
    }
    
    vis[sr][sc] = true;
    // Go down direction
    printAllPath(sr + 1, sc, er, ec, result + "D", vis);
    // Go right direction
    printAllPath(sr, sc + 1, er, ec, result + "R", vis);
    // Go up direction
    printAllPath(sr - 1, sc, er, ec, result + "U", vis);
    // Go left direction
    printAllPath(sr, sc -1, er, ec, result + "L", vis);
    // Backtrack
    vis[sr][sc] = false;
}

const visited = Array.from({length: 3}, ()=>{
     return Array(3).fill(false);
});

printAllPath(0, 0, 2, 2, "", visited);