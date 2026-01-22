public class FirstOccurance {
    private static int findFirstOccurance(int[] nums, int target, int i){
        if(nums.length == i) return -1;

        if(nums[i] == target){
            return i;
        }

        return findFirstOccurance(nums, target, i+1);
    }
    public static void main(String[] args) {
        int[] nums = {8, 3, 6, 9, 5, 3, 2, 5, 9};
        System.out.println(findFirstOccurance(nums, 5, 0));
    }
}
