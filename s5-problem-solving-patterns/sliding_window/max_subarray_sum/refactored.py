def maxSubarraySum(arr, num):
    if num > len(arr):
        return None

    tempSum = sum(arr[0:num])
    maxSum = tempSum

    for i in range(num, len(arr)):
        tempSum -= arr[i - num]
        tempSum += arr[i]
        if tempSum > maxSum:
            maxSum = tempSum

    return maxSum


print(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
