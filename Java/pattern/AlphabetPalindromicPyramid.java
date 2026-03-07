package pattern;

public class AlphabetPalindromicPyramid {
    public static void main(String[] args) {
        int n = 4;

        for(int i = 0; i < n; i++){
            for(int j = n-1; j > i; j--){
                System.out.print("  ");
            }
            for(int j = 0; j <= i; j++){
                char ch = (char)(j + 65);
                System.out.print(ch + " ");
            }
            for(int j = i; j > 0; j--){
                char ch = (char)(j + 64);
                System.out.print(ch +" ");
            }
            System.out.println();
        }
    }
}
