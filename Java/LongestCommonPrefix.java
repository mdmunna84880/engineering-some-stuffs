public class LongestCommonPrefix {
    private static String longestPrefix(String[] words){
        StringBuilder sb = new StringBuilder("");
        for(int i = 0; i < words.length; i++){
            for(int j = 1; j < words.length; j++){
                if(i < words[0].length() && i < words[j].length() && words[0].charAt(i) != (words[j].charAt(i))){
                    return sb.toString();
                }
            }
            sb.append(words[0].charAt(i));
        }

        return sb.toString();
    }
    public static void main(String[] args) {
        String[] str = {"dog", "racecar", "car"};
        System.out.println(longestPrefix(str));
    }
}
