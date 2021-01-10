package main

import "fmt"

func main() {
	fmt.Println(sumZero([]int{-4, -3, -2, -1, 0, 1, 2, 5}))
}

func sumZero(arr []int) []int {
	left := 0
	right := len(arr) - 1

	for left < right {
		sum := arr[left] + arr[right]
		if sum == 0 {
			return []int{arr[left], arr[right]}
		}

		if sum > 0 {
			right--
		} else {
			left++
		}
	}
	return []int{}
}
