import java.util.*;

public class NonRepeatingChar {

    // Approach-1
    private static char nonRepeatingChar1(String str){

        for(int i = 0; i < str.length(); i++){
            boolean repeated = false;
            for(int j = 0; j < str.length(); j++){
                if(i != j && str.charAt(i) == str.charAt(j)){
                    repeated = true;
                    break;
                }
            }

            if(!repeated){
                return str.charAt(i);
            }
        }

        return '$';
    }

    // Approach-2
    private static char nonRepeatingChar2(String str){

        Map<Character, Integer> charCount = new LinkedHashMap<>();

        for(int i = 0; i < str.length(); i++){
            charCount.put(str.charAt(i), charCount.getOrDefault(str.charAt(i), 0)+1);
        }

        for(Map.Entry<Character, Integer> entry : charCount.entrySet()){
            if(entry.getValue() == 1) return entry.getKey();
        }
        return '$';
    }
    public static void main(String[] args) {
        String str = "aabbc";
        System.out.println(nonRepeatingChar1(str));
        System.out.println(nonRepeatingChar2(str));
    }
}
