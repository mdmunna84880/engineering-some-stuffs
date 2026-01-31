def non_zeros(arr):
    n = len(arr)
    newList = []
    
    for i in range(0, n):
        if(arr[i] != 0): newList.append(arr[i])
    
    zerothCount = n - len(newList)
    for i in range(zerothCount):
        newList.append(0)

    return newList

print(non_zeros([1, 2, 3, 4, 5, 0, 7, 9, 0])) 