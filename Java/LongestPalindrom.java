public class LongestPalindrom {
    // Approach 1
    private static String getLongestPal(String str) {

        if (str == null || str.length() < 1) {
            return "";
        }
        
        int n = str.length();

        int start = 0;
        int maxLen = 1;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (getPal(i, j, str) && maxLen < j - i + 1) {
                    start = i;
                    maxLen = j - i + 1;
                }
            }
        }

        return str.substring(start, maxLen + start);
    }

    private static boolean getPal(int l, int r, String str) {

        while (l < r) {
            if (str.charAt(r) != str.charAt(l)) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }

     // Approach 2
    private static String getLongestPalDP(String s){
        if(s == null || s.length() < 1){
            return "";
        }
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        int start = 0;
        int maxLen = 1;

        for(int i = 0; i < n; i++){
            dp[i][i] = true;
        }

        for(int i = 0; i < n-1; i++){
            if(s.charAt(i) == s.charAt(i+1)){
                dp[i][i+1] = true;

                if(maxLen == 1){
                    maxLen = 2;
                    start = i;
                }
            }
        }

        for(int len = 3; len <= n; len++){
            for(int i = 0; i <= n-len; i++){
                int j = i + len - 1;
                if(s.charAt(i) == s.charAt(j) && dp[i+1][j-1]){
                    dp[i][j]=true;
                    if(len > maxLen){
                        start = i;
                        maxLen = len;
                    }
                }
            }
        }

        return s.substring(start, maxLen+start);

    }

    // Approach 3
    private static String getLongestPalEvenOdd(String str){
        int n = str.length();

        int start = 0;
        int maxLen = 1;
        
        for(int i = 0; i < str.length(); i++){

            for(int j = 0; j <= 1; j++){
                int low = i;
                int high = i+j;

                while(low >= 0 && high < n && str.charAt(low) == str.charAt(high)){
                    int currLen = high - low + 1;

                    if(currLen > maxLen){
                        start = low;
                        maxLen = currLen;
                    }

                    low--;
                    high++;
                }
            }
        }

        return str.substring(start, maxLen + start);
    }
    
    public static void main(String[] args) {
        System.out.println(getLongestPal("forgeeksskeegfor"));
        System.out.println(getLongestPalDP("forgeeksskeegfor"));
        System.out.println(getLongestPalEvenOdd("forgeeksskeegfor"));
    }
}