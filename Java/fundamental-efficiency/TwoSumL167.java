public class TwoSumL167 {
    public static int[] twoSum(int[] nums, int target){
        int left = 0;
        int right = nums.length-1;

        while(left < right){
            int sum = nums[left] + nums[right];

            if(sum == target){
                return new int[]{left + 1, right + 1};
            }else if(sum < target){
                left++;
            }else{
                right--;
            }
        }

        return new int[]{-1, -1};
    }
    public static void main(String[] args) {
        int[] arr = {2,7,11,15};
        int target = 9;

        int[] result = twoSum(arr, target);
        System.out.println(result[0] + " " + result[1]);

    }
}
