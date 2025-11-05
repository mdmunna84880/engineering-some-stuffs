import java.util.*;

public class AllOccurances {

    // Approach-1
    private static List<Integer> allOccurances(String pattern, String text){
        int n = text.length();
        int m = pattern.length();

        List<Integer> occurances = new ArrayList<>();
        for(int i = 0; i <= n - m; i++){
            int j = 0;

            while(j < m){
                if(pattern.charAt(j) != text.charAt(i+j)){
                    break;
                }
                j++;
            }

            if(j == m){
                occurances.add(i);
                i += j-1;
            }
        }

        return occurances;
    }

    // Approach-2
    private static List<Integer> allOccurances1(String pattern, String text){
        int n = text.length();
        int m = pattern.length();

        List<Integer> occurances = new ArrayList<>();

        int i = 0;
        while(i <= n-m){
            int j = 0;

            while(j < m && pattern.charAt(j) == text.charAt(i+j)){
                j++;
            }

            if(j == m){
                occurances.add(i);
                i += j;
            }else{
                i++;
            }
        }

        return occurances;
    }

    public static void main(String[] args) {
        System.out.println(allOccurances("aba", "abababab"));
        System.out.println(allOccurances1("aba", "abababab"));
    }
}
