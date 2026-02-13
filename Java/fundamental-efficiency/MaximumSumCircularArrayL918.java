public class MaximumSumCircularArrayL918 {
    // Naive approch
    // TC-O(n^2)
    // SC-O(1)
    public static int findMaxSubArraySum1(int[] nums){
        int n = nums.length;
        // Track maximum sum subarray sum
        int maxSum = Integer.MIN_VALUE;

        // Go to specific index and check from there if the subarray within that
        for(int i = 0; i < n; i++){
            int currSum = 0;

            for(int j = 0; j < n; j++){
                int idx = (i + j)%n;
                currSum += nums[idx];
                maxSum = Math.max(currSum, maxSum);
            }
        }

        return maxSum;
    }

    public static int findMaxSubArraySum2(int[] nums){
        int n = nums.length;

        int suffixSum = nums[n-1];
        // Store the max sum from end to specific index
        int[] maxSuffixSum = new int[n+1];
        maxSuffixSum[n-1] = nums[n-1];

        // Calculate all the maximum sum from end to specific index and assign to the specific index 
        for(int i = n-2; i >= 0; i--){
            suffixSum += nums[i];
            maxSuffixSum[i] = Math.max(maxSuffixSum[i+1], suffixSum);
        }

        // Current maximum sum in non-circular
        int currSum = 0;
        // Maximum subarray sum in non-circular
        int maxNonCircularSum = Integer.MIN_VALUE;

        // Prefix sum upto specific index
        int prefix = 0;
        // Maximum subarray sum in circular
        int maxCircularSum = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++){
            // Calculate the maximum sum in non-circular subarray
            currSum = Math.max(currSum + nums[i], nums[i]);
            maxNonCircularSum = Math.max(maxNonCircularSum, currSum);

            // Calculate the circular subarray maximum sum
            prefix += nums[i];
            maxCircularSum = Math.max(maxCircularSum, prefix + maxSuffixSum[i+1]);
        }

        return Math.max(maxCircularSum, maxNonCircularSum);
        
    }
    
    public static int findMaxSubArraySum3(int[] nums){
        // Store minimum current sum and minimum subarray sum
        int currMinSum = 0;
        int minSum = Integer.MAX_VALUE;

        // Store maximum current sum and maximum subarray sum
        int currMaxSum = 0;
        int maxSum = Integer.MIN_VALUE;

        // Store total sum
        int total = 0;

        for(int i = 0; i < nums.length; i++){
            // Calculate the current minimum sum upto i and the minimum subarray sum
            currMinSum = Math.min(currMinSum + nums[i], nums[i]);
            minSum = Math.min(minSum, currMinSum);

            // Calculate the current maximum sum upto i and maximum subarray sum
            currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
            maxSum = Math.max(maxSum, currMaxSum);

            // Calculate total sum
            total += nums[i];
        }

        // Calculate the circular maximum sum
        int circularMaxSum = total - minSum;
        // Calculate the non circular maximum sum
        int normalMaxSum = maxSum;

        // Check if the total and minimum sum equal then it definitely that
        // deducting the minimum sum will result in 0
        if(total == minSum){
            return normalMaxSum;
        }

        return Math.max(circularMaxSum, normalMaxSum);
    }
    public static void main(String[] args) {
        int[] arr = {8, -8, 9, -9, 10, -11, 12};

        System.out.println(findMaxSubArraySum1(arr));
        System.out.println(findMaxSubArraySum2(arr));
        System.out.println(findMaxSubArraySum3(arr));
    }
}