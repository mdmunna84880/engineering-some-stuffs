package pattern;

public class MirrorNumber {
    public static void main(String[] args) {
        int n = 5;

        for(int i = 0; i < n; i++){
            for(int j = 0; j <= i; j++){
                System.out.print(j+1+" ");
            }
            for(int j = (n - i - 1)*2; j > 0; j--){
                System.out.print("  ");
            }
            for(int j = i; j >= 0; j--){
                System.out.print(j+1+" ");
            }

            System.out.println();
        }
    }
}
