const intersect = function(nums1, nums2) {
   // your Code Goes Here

  const max = Math.max(...nums1);
   
  const freq = new Array(max+1).fill(0);
  let result = [];

  for(let i = 0; i < nums1.length; i++){
    freq[nums1[i]]++;
  }

 for(let i = 0; i < nums2.length; i++){
  if(nums2[i] >= max && freq[nums2[i]] > 0){
      result.push(nums2[i]);
      freq[nums2[i]]--;
  }
 }

 return result;
};

consol