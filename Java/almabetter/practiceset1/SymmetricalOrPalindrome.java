public class SymmetricalOrPalindrome {

    // Check whether the string is symmetrical or not
    private static boolean isSymmetrical(String str){
        int n = str.length();
        int mid = n/2;
        if(n % 2 == 0){
            return str.substring(0, mid).equals(str.substring(mid, n));
        }else{
            return str.substring(0, mid).equals(str.substring(mid+1, n));
        }
    }

    // Check whether any string is palindrom or not
    private static boolean isPalindrom(String str){
        int n = str.length();
        int start = 0;
        int end = n-1;

        while (start <= end) {
            if(str.charAt(start) != str.charAt(end)) return false;
            start++;
            end--;
        }

        return true;
    }
    public static void main(String[] args) {
        String str = "hello";

        if(isPalindrom(str)){
            System.out.println("The entered string is a palindrome");
        }else{
            System.out.println("The entered string is not a palindrome");
        }

        if(isSymmetrical(str)){
            System.out.println("The entered string is symmetrical");
        }else{
            System.out.println("The entered string is not symmetrical");
        }
    }
}
