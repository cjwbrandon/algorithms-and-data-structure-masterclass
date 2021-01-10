def flatten(arr):
    if len(arr) == 1 and type(arr[0]) != list:
        return arr
    if type(arr[0]) == list:
        return flatten(arr[0] + arr[1:])
    return [arr[0]] + flatten(arr[1:])


print(flatten([1, 2, 3, [4, 5]]))  # [1, 2, 3, 4, 5]
print(flatten([1, [2, [3, 4], [[5]]]]))  # [1, 2, 3, 4, 5]
print(flatten([[1], [2], [3]]))  # [1,2,3]
print(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))  # [1,2,3]

