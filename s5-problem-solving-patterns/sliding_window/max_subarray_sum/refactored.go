package main

import (
	"errors"
	"fmt"
)

func main() {
	fmt.Println(maxSubarraySum([]int{2, 6, 9, 2, 1, 8, 5, 6, 3}, 3))
}

func maxSubarraySum(arr []int, num int) (int, error) {
	if num > len(arr) {
		return 0, errors.New("Array length is shorter than Num")
	}

	tempSum := sum(arr[0:num])
	maxSum := tempSum

	for i := num; i < len(arr); i++ {
		tempSum -= arr[i-num]
		tempSum += arr[i]

		if tempSum > maxSum {
			maxSum = tempSum
		}
	}
	return maxSum, nil
}

func sum(arr []int) int {
	total := 0
	for _, v := range arr {
		total += v
	}
	return total
}
