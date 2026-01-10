function findNonOverlapping(nums){
    let res = [];

    for(let i = 0; i < nums.length; i++){
        let a = nums[i][0];
        let b = nums[i][1];
        for(let j = i+1; j < nums.length; j++){
            let c = nums[j][0];
            let d = nums[j][1];
            if(b > c && a < d){
                a = Math.min(a, c);
                b = Math.max(b, d);
                nums.splice(j, 1);
            }
        }
        res.push([a, b]);
    }

    return res;
}

function mergeOverlappingInterval(nums){
    let n = nums.length;

    nums.sort((a, b)=>a[0]-b[0]);
    let res = [];

    for(let i = 0; i < n; i++){
        let start1 = nums[i][0];
        let end1 = nums[i][1];

        if(res.length && end1 <= res[res.length-1][1]){
            continue;
        }

        for(let j = i+1; j < n; j++){
            let start2 = nums[j][0];
            let end2 = nums[j][1];

            if(end1 >= start2){
                end1 = Math.max(end1, end2);
            }
        }

        res.push([start1, end1]);
    }

    return res;
}
function mergeOverlappingIntervalOptimised(nums){
    let n = nums.length;

    nums.sort((a, b)=>a[0]-b[0]);
    let res = [nums[0]];

    for(let i = 1; i < n; i++){
        const last = res[res.length-1];
        let curr = nums[i];

        if(curr[0] <= last[1]){
            last[1] = Math.max(curr[1], last[1]);
        }else{
            res.push(curr);
        }
    }

    return res;
}

const arr = [[1, 3], [8, 10], [2, 6], [15, 18]];
console.log(findNonOverlapping([[5, 10], [1, 4], [3, 6]]));
console.log(mergeOverlappingInterval([[5, 10], [1, 4], [3, 6]]));
console.log(mergeOverlappingIntervalOptimised([[5, 10], [1, 4], [3, 6]]));