/** @format */

function CountInversion(nums) {
  let count = 0;
  mergeSort(nums, 0, nums.length - 1);

  function mergeSort(nums, si, ei) {
    if (si >= ei) {
      return;
    }
    let mid = Math.floor(si + (ei - si) / 2);
    mergeSort(nums, si, mid);
    mergeSort(nums, mid + 1, ei);
    merge(nums, si, mid, ei);
  }

  function merge(nums, si, mid, ei){
    let temp = new Array(ei - si + 1);
    let k = 0, i = si, j = mid+1;

    while(i <= mid && j <= ei){
        if(nums[i] > nums[j]){
            count += (mid - i) + 1;
            temp[k++] = nums[j++];
        }else{
            temp[k++] = nums[i++]; 
        }
    }

    while(i <= mid){
        temp[k++] = nums[i++];
    }

    while(j <= ei){
        temp[k++] = nums[j++];
    }

    for(i = si, k = 0; k < temp.length; k++){
        nums[i++] = temp[k];
    }
  }

  return count;
}

console.log(CountInversion([8, 4, 2, 1]));
