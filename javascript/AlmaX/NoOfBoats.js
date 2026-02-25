function findNoBoats(people, limit){
    people.sort((a, b)=>a-b);
    let n = people.length;
    let i = 0;
    let j = n - 1;

    let ans = 0;

    while(i <= j){
        let remained = limit-people[j--];
        if(people[i] <= remained){
            i++;
        }
        ans++;
    }

    return ans;
}

console.log(findNoBoats([3,2,2,1], 3))