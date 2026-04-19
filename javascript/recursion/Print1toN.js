const naturalNumbers = (n)=>{
    if(n === 0){
        return;
    }
    naturalNumbers(n-1);
    console.log(n);
}

naturalNumbers(6);