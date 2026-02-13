import java.util.Arrays;

public class AggressiveCows{
    private static boolean isAllCowsPlaceable(int[] stalls, int cows, int minDis){
        // Place the first cow at first stall
        int lastPos = stalls[0];
        int count = 1;

        for(int i = 1; i < stalls.length; i++){
            // Check the minimum satisfying
            if(stalls[i] - lastPos >= minDis){
                count++;
                lastPos = stalls[i];
            }
        }

        // If all cows placed means that distance can be minimum
        if(count >= cows) return true;

        return false;
    }

    private static int findMinDis(int[] stalls, int cows){
        Arrays.sort(stalls);
        int n = stalls.length;

        // Find the maximum distance
        int maxStallDis = stalls[n-1]-stalls[0];

        // Minimum distance that is found in the placed cow assuming 0 initially
        int minDis = 0;

        for(int i = 1; i < maxStallDis; i++){
            // Calculate the minimum distance from 1 to maxStall distance, if all cow can be placed in the stall
            if(isAllCowsPlaceable(stalls, cows, i)) minDis = i;
        }

        return minDis;
    }

    private static int findMinDis1(int[] stalls, int cows){
        Arrays.sort(stalls);
        int n = stalls.length;

        // Assuming lowes distance and highest distance
        int lowestDis = 1;
        int highestDis = stalls[n-1] - stalls[0];

        // Minimum distance that is found after placing all cows
        int minDis = 0;

        while(lowestDis <= highestDis){
            // Calculate the mid distance
            int midDist = lowestDis + (highestDis - lowestDis)/2;

            // Check whether that mid distance is minimum for that all cows or not
            if(isAllCowsPlaceable(stalls, cows, midDist)){
                // yes then, store that mid distance as it satisfied to place all cows at the minimum distance 
                minDis = midDist;
                // yes then check the next mid distance, is that also possible
                lowestDis = midDist + 1;
            }else{
                // No, then try lowest half of the mid, is that satisfying
                highestDis = midDist -1;
            }
        }

        return minDis;
    }
    public static void main(String[] args) {
        int[] stalls = {1, 2, 8, 4, 9};
        int cows = 3;

        System.out.println(findMinDis(stalls, cows));
        System.out.println(findMinDis1(stalls, cows));
    }
}