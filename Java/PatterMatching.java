import java.util.*;

public class PatterMatching {

    private static boolean isPatternMatch(String pattern, String sentence) {
        // 1. Initial checks (same as yours)
        if (pattern.length() == 0 && sentence.length() == 0) {
            return true;
        }
        if (pattern.length() == 0 || sentence.length() == 0) {
            return false;
        }

        String[] words = sentence.split(" ");

        if (pattern.length() != words.length) {
            return false;
        }

        Map<Character, String> charToWord = new HashMap<>();
        Set<String> wordUsed = new HashSet<>();

        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            String word = words[i];

            // 2. Check if the character c is already mapped
            if (charToWord.containsKey(c)) {
                // If it is, the word it maps to MUST match the current word
                if (!charToWord.get(c).equals(word)) {
                    return false; // Mismatch: 'a' -> "dog" but now 'a' -> "fish"
                }
            } else {
                // 3. If c is not mapped, check if the word is already used
                if (wordUsed.contains(word)) {
                    return false; // Mismatch: 'b' -> "dog" but 'a' already maps to "dog"
                }
                
                // 4. If both are new, create the mapping
                charToWord.put(c, word);
                wordUsed.add(word);
            }
        }

        // If we get through the whole loop, the pattern matches
        return true;
    }

    public static void main(String[] args) {
        System.out.println("--- Testing Pattern Matching ---");

        // Test cases
        String p1 = "abba";
        String s1 = "dog cat cat dog"; // true

        String p2 = "abba";
        String s2 = "dog cat cat fish"; // false

        String p3 = "aaaa";
        String s3 = "dog cat cat dog"; // false

        String p4 = "abba";
        String s4 = "dog dog dog dog"; // false

        String p5 = "abc";
        String s5 = "dog cat fish"; // true

        // Running the tests
        System.out.println(p1 + " | " + s1 + " : " + isPatternMatch(p1, s1));
        System.out.println(p2 + " | " + s2 + " : " + isPatternMatch(p2, s2));
        System.out.println(p3 + " | " + s3 + " : " + isPatternMatch(p3, s3));
        System.out.println(p4 + " | " + s4 + " : " + isPatternMatch(p4, s4));
        System.out.println(p5 + " | " + s5 + " : " + isPatternMatch(p5, s5));
    }
}