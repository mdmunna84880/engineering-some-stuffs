/** @format */

const canJump = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(false);

  dp[0] = true;

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n - 1];
};
const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));
