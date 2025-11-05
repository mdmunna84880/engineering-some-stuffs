public class LongestRepeatedSubString {
    private static String repeatedSubstring(String str){
        String result = new String("");
        int maxL = 0;

        for(int i = 0; i < str.length(); i++){
            for(int j = i + 1; j < str.length(); j++){
                int k = 0;
                while(str.length() > i+k && str.length() > j+k && str.charAt(i+k) == str.charAt(j+k)){
                    k++;
                }

                if(maxL < k){
                    maxL = k;
                    result = str.substring(i, i+maxL);
                }
            }
        }

        return result;
    }
    public static void main(String[] args) {
        String str = "banana";
        System.out.println(repeatedSubstring(str));
    }
}
