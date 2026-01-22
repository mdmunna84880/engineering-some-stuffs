public class LastOccurance {
    private static int findLastOccurance(int[] nums, int key, int i){
        if(i == nums.length) return -1;
        int foundIdx = findLastOccurance(nums, key, i+1);
        if(foundIdx == -1 && nums[i] == key){
            return i;
        }
        return foundIdx;
    }

    public static void main(String[] args) {
        int[] nums = {5, 5, 5};
        System.out.println(findLastOccurance(nums, 5, 0));
    }
}
