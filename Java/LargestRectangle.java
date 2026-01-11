import java.util.Stack;

public class LargestRectangle {
    // Time Complexity-O(n^2)
    // Space Complexity-O(1)
    private static int findLargest1(int[] nums){
        int n = nums.length;
        int maxArea = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++){
            int minHeight = Integer.MAX_VALUE;
            for(int j = i; j < n; j++){
                minHeight = Math.min(minHeight, nums[j]);
                int currArea = minHeight * (j - i + 1);
                maxArea = Math.max(currArea, maxArea);
            }
        }

        return maxArea;
    }

    // Time Complexity:O(n)
    // Space Complexity:O(n)
    private static int findLargest2(int[] height){
        int n = height.length;
        int[] leftValidIdx = new int[n];
        int[] rightValidIdx = new int[n];

        Stack<Integer> st = new Stack<>();

        int maxArea = Integer.MIN_VALUE;

        // Find all leftValidIdx
        for(int i = 0; i < n; i++){
            while (!st.empty() && height[st.peek()] >= height[i]) {
                st.pop();
            }
            leftValidIdx[i] = st.empty() ? 0 : st.peek()+1;
            st.push(i);
        }

        st.clear();
        // Find all rightValidIdx
        for(int i = n-1; i >= 0; i--){
            while (!st.empty() && height[st.peek()] >= height[i]) {
                st.pop();
            }
            rightValidIdx[i] = st.empty() ? n-1 : st.peek()-1;
            st.push(i);
        }

        for(int i = 0; i < n; i++){
            int width = rightValidIdx[i] - leftValidIdx[i] + 1;
            int currArea = height[i] * width;
            maxArea = Math.max(currArea, maxArea);
        }

        return maxArea;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    private static int findLargest3(int[] heights){
        int n = heights.length;
        int maxArea = Integer.MIN_VALUE;

        Stack<Integer> st = new Stack<>();

        for(int i = 0; i <= n; i++){
            while (!st.isEmpty() && (i == n || heights[st.peek()] >= (i < n ? heights[i] : 0))) {
                int height = heights[st.pop()];

                int width;
                if(st.isEmpty()){
                    width = i;
                }else{
                    width = i - st.peek() - 1;
                }

                maxArea = Math.max(maxArea, width * height);
            }
            st.push(i);
        }

        return maxArea;
    }
    public static void main(String[] args) {
        int[] arr = {2, 1, 5, 6, 2, 3, 1};

        System.out.println("First Approach");
        System.out.println(findLargest1(arr));

        System.out.println("Second Approach");
        System.out.println(findLargest2(arr));

        System.out.println("Third Approach");
        System.out.println(findLargest3(arr));
    }
}
