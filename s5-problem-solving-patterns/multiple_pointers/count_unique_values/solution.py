def countUniqueValues(arr):
    if len(arr) == 0:
        return 0

    uniquePointer = 0
    for i in range(len(arr)):
        if arr[uniquePointer] != arr[i]:
            uniquePointer += 1
            arr[uniquePointer] = arr[i]

    return uniquePointer + 1


print(countUniqueValues([1, 1, 1, 1, 1, 2]))  # 2
print(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))  # 7
print(countUniqueValues([]))  # 0
print(countUniqueValues([-2, -1, -1, 0, 1]))  # 4

