function ratInMaze(rows, columns){
    function totalWays(sr=1, er, sc = 1, ec){
        if(sr > er || sc > ec) return 0;

        if(sr === er && sc === ec) return 1;

        return totalWays(sr + 1, er, sc, ec) + totalWays(sr, er, sc + 1, ec);
    }


    function printPath(sr, er, sc, ec, result){
        if(sr > er || sc > ec){
            return;
        }

        if(sr === er && sc === ec){
            console.log(result);
            return;
        }

        // Go to right direction
        printPath(sr + 1, er, sc, ec, result + "R");
        printPath(sr, er, sc + 1, ec, result + "D");
    }

    console.log(totalWays(1, rows, 1, columns));
    printPath(1, rows, 1, columns, "");
}

ratInMaze(4, 6);