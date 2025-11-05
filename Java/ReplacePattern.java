import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ReplacePattern {

    // Approach-1
    private static String replacePattern(String text, String pattern, String replacement){
        int n = text.length();
        int m = pattern.length();

        StringBuilder replacedText = new StringBuilder("");
        int i = 0;
        while(i <= n-m){
            int j = 0;
            while(j < m && text.charAt(i+j) == pattern.charAt(j)){
                j++;
            }

            if(j == m){
                replacedText.append(replacement);
                i += j;
            }else{
                replacedText.append(text.charAt(i));
                i++;
            }
        }
        replacedText.append(text.substring(i));

        return replacedText.toString();
    }

    // Approach-2
    private static String replacePattern1(String text, String pattern, String replacement){
        Pattern p = Pattern.compile(pattern);
        Matcher m = p.matcher(text);

        return m.replaceAll(replacement);
    }
    
    public static void main(String[] args) {
        System.out.println(replacePattern("bababab", "aba", "xyz"));
        System.out.println(replacePattern1("bababab", "aba", "xyz"));
    }
    
}
