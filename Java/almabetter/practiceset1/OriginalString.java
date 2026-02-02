public class OriginalString {
    private static String restoreText(String str){
        StringBuilder sb = new StringBuilder();
        int i = 0;
        while(i < str.length()){
            char ch = str.charAt(i);
            if( ch == '@'){
                int j = Integer.parseInt(String.valueOf(str.charAt(i+1)));

                while (j > 0) {
                    sb.append(str.charAt(i+2));
                    j--;
                }
                i += 3;
            }else{
                sb.append(ch);
                i += 1;
            }
        }

        return sb.toString();
    }
    public static void main(String[] args) {
        String str = "@39+1=1@30";

        System.out.println(restoreText(str));
    }
}
