import java.util.*;

// Approach-1
public class IsAnagram {
    // private static boolean isAnagram(String str1, String str2){
    //     if(str1.length() != str2.length() || str1 == null || str2 == null){
    //         return false;
    //     }

    //     char[] letter1 = str1.toCharArray();
    //     Arrays.sort(letter1);

    //     char[] letter2 = str2.toCharArray();
    //     Arrays.sort(letter2);

    //     return Arrays.equals(letter1, letter2);
        
    // }

    // Approach-2
    private static boolean isAnagram2(String str1, String str2){
        if(str1 == null || str2 == null || str1.length() != str2.length()){
            return false;
        }

        Map<Character, Integer> charFreq = new HashMap<>();
        for(int i = 0; i < str1.length(); i++){
            charFreq.put(str1.charAt(i), charFreq.getOrDefault(str1.charAt(i), 0)+1);
        }

        for(char ch : str2.toCharArray()){

            if(!charFreq.containsKey(ch) || charFreq.get(ch) == 0){
                return false;
            }

            if(charFreq.get(ch) > 0){
                charFreq.put(ch, charFreq.get(ch)-1);
            }

        }

        return true;
    }

    public static void main(String[] args) {
        String[][] tests = {
        {"triangle", "integral"},
        {"listen", "silent"},
        {"evil", "vile"},
        {"anagram", "nagaram"},
        {"aabbcc", "abcabc"},
        {"hello", "bello"},
        {"rat", "car"},
        {"test", "ttew"},
        {"abc", "abcd"},
        {"abc", "ab"},
        {"Listen", "Silent"},
        {"LISTEN", "silent"},
        {"Abc", "Cab"},
        {"conversation", "voices rant on"},
        {"dormitory", "dirty room"},
        {"a gentleman", "elegant man"},
        {"Clint Eastwood", "Old West Action"},
        {"", ""},
        {"a", "a"},
        {"a", "b"},
        {null, "abc"},
        {"💙💛", "💛💙"}
    };

    for (String[] pair : tests) {
        try {
            System.out.printf("%-30s %-30s -> %s%n",
                pair[0], pair[1],
                isAnagram2(pair[0], pair[1]));
        } catch (Exception e) {
            System.out.printf("%-20s %-20s -> EXCEPTION%n", pair[0], pair[1]);
        }
    }

    }
}