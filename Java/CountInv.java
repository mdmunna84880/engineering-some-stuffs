public class CountInv{

    private static long countInversion(int[] arr, int left, int right){
        if(left == right){
            return 0;
        }

        int mid = left + (right - left)/2;
        long leftCount = countInversion(arr, left, mid);
        long rightCount = countInversion(arr, mid+1, right);

        long combineCount = combineHalves(arr, left, mid, right);

        return leftCount + rightCount + combineCount ;
    }

    private static long combineHalves(int[] arr, int left, int mid, int right){
        int[] temp = new int[right - left + 1];
        int i = left;
        int j = mid+1;
        int k = 0;
        long count = 0;

        while(i <= mid && j <= right){
            if(arr[i] > arr[j]){
                temp[k] = arr[j++];
                count += mid - i + 1;
            }else{
                temp[k] = arr[i++];
            }
            k++;
        }

        while (i <= mid) {
            temp[k++] = arr[i++];
        }

        while (j <= right) {
            temp[k++] = arr[j++];
        }

        for(k = 0, i = left; k < temp.length; k++, i++){
            arr[i] = temp[k];
        }

        return count;
    }

    public static void main(String[] args) {
        int[] arr = {3, 3, 1, 2};
        System.out.println(countInversion(arr, 0, arr.length-1));   
    }
}