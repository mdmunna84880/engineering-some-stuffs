
public class CountOccurances {
     // Approach-1
    private static int countOccurances(String pattern, String text){
        int n = text.length();
        int m = pattern.length();

        int count = 0;
        for(int i = 0; i <= n - m; i++){
            int j = 0;

            while(j < m){
                if(pattern.charAt(j) != text.charAt(i+j)){
                    break;
                }
                j++;
            }

            if(j == m){
                count++;
                i += j-1;
            }
        }

        return count;
    }

    // Approach-2
    private static int countOccurances1(String pattern, String text){
        int n = text.length();
        int m = pattern.length();

        int count = 0;

        int i = 0;
        while(i <= n-m){
            int j = 0;

            while(j < m && pattern.charAt(j) == text.charAt(i+j)){
                j++;
            }

            if(j == m){
                count++;
                i += j;
            }else{
                i++;
            }
        }

        return count;
    }

    public static void main(String[] args) {
        System.out.println(countOccurances("Hello", "Hello, Hello, world!"));
        System.out.println(countOccurances1("Hello", "Hello, Hello, world!"));
    }
}
