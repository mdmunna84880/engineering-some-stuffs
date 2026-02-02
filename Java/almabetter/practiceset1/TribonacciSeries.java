import java.util.*;

public class TribonacciSeries {
    private static List<Integer> tibonacciSeries(int n){
        List<Integer> series = new ArrayList<>();

        int a = 0;
        int b = 1;
        int c = 2;
        
        for(int i = 0; i < n; i++){
            if(i == 0) series.add(a);
            else if(i == 1) series.add(b);
            else {
                series.add(c);
                int temp = a + b + c;
                a = b;
                b = c;
                c = temp;
            }
        }

        return series;
    }
    public static void main(String[] args) {
        int n = 7;

        List<Integer> list = tibonacciSeries(n);

        System.out.println(list);
    }
    
}