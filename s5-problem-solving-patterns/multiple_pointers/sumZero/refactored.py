def sum_zero(arr):
    left = 0
    right = len(arr) - 1

    while left < right:
        sum = arr[left] + arr[right]

        if sum == 0:
            return [arr[left], arr[right]]

        if sum > 0:
            right -= 1
        else:
            left += 1


print(sum_zero([-4, -3, -2, -1, 0, 1, 2, 5]))
