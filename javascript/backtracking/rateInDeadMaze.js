const maze = [
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 1]
];

function printAllPath(sr, sc, er, ec, maze, result){
    if(sc > ec || sc < 0 || sr > er || sr < 0) return;
    if(maze[sr][sc] === 0 || maze[sr][sc] === -1) return;
    if(sc === ec && sr === er){
        console.log(result);
        return;
    }
    if(maze[sr][sc] === 1){
        maze[sr][sc] = -1;
    }

    printAllPath(sr, sc + 1, er, ec, maze, result+"R");
    printAllPath(sr, sc - 1, er, ec, maze, result+"L");
    printAllPath(sr + 1, sc, er, ec, maze, result+"D");
    printAllPath(sr - 1, sc, er, ec, maze, result+"U");

    if(maze[sr][sc] === -1){
        maze[sr][sc] = 1;
    }
}

printAllPath(0, 0, 2, 3, maze, "");