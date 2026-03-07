package pattern;

public class ReverseAlphabet {
    public static void main(String[] args) {
        int n = 5;

        for (int i = n - 1; i >= 0; i--) {
            for (int j = 0; j <= n - i - 1; j++) {
                char ch = (char) (i + j + 65);
                System.out.print(ch + " ");
            }
            System.out.println();
        }
    }
}
