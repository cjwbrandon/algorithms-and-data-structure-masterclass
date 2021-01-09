def same(arr1, arr2):
    if len(arr1) != len(arr2):
        return False

    for val in arr1:
        try:
            correctIndex = arr2.index(val ** 2)
        except:
            return False
        else:
            arr2.pop(correctIndex)
    return True


print(same([1, 2, 3], [9, 1, 4]))
print(same([1, 2, 3, 2], [9, 4, 1, 4]))
