public class MaximumRectangleArea80 {

    /**
 * Computes the maximum rectangular area that can be formed in a histogram.
 *
 * Each element in the array represents the height of a bar.
 * The width of each bar is assumed to be 1 unit.
 *
 * Approach (Brute Force – Conceptual):
 * -----------------------------------
 * For every bar, we assume it is the "shortest bar" in a rectangle.
 * Then we try to expand that rectangle:
 *   - to the left as long as bars are at least as tall
 *   - to the right as long as bars are at least as tall
 *
 * The total area is:
 *   height of current bar × total number of bars it can stretch across
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
private static int getMax(int[] arr) {

    // Stores the maximum rectangle area found so far
    int maxArea = 0;

    // Total number of bars in the histogram
    int n = arr.length;

    // Step 1: Fix each bar one by one as the limiting (minimum) height
    for (int i = 0; i < n; i++) {

        /*
         * Start with the area contributed by the current bar alone.
         * Since width = 1, initial area = height of the bar.
         */
        int currentArea = arr[i];

        /*
         * Step 2: Expand to the LEFT
         * Keep moving left while:
         *   - we stay inside the array
         *   - the neighboring bar height is >= current bar height
         *
         * For each valid bar, we can extend the rectangle width by 1,
         * so we add the current bar height again.
         */
        for (int j = i - 1; j >= 0 && arr[j] >= arr[i]; j--) {
            currentArea += arr[i];
        }

        /*
         * Step 3: Expand to the RIGHT
         * Same logic as the left side:
         * extend while bars are tall enough to support the rectangle.
         */
        for (int j = i + 1; j < n && arr[j] >= arr[i]; j++) {
            currentArea += arr[i];
        }

        /*
         * Step 4: Update the global maximum area
         * if the rectangle formed using bar i is better.
         */
        maxArea = Math.max(maxArea, currentArea);
    }

    // Final answer: largest rectangle area found
    return maxArea;
}


    public static void main(String[] args) {

        
    }


}
