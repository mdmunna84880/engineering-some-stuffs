const reverN = (n, i = 1)=>{
    if(n === i){
        return;
    }

    reverN(n, i+1);
    console.log(i);
}

reverN(10);