package main

import "fmt"

func main() {
	fmt.Println(countUniqueValues([]int{1, 1, 1, 1, 1, 2}))                   // 2
	fmt.Println(countUniqueValues([]int{1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13})) // 7
	fmt.Println(countUniqueValues([]int{}))                                   // 0
	fmt.Println(countUniqueValues([]int{-2, -1, -1, 0, 1}))                   // 4
}

func countUniqueValues(arr []int) int {
	if len(arr) == 0 {
		return 0
	}

	uniquePointer := 0
	for i := 0; i < len(arr); i++ {
		if arr[uniquePointer] != arr[i] {
			uniquePointer++
			arr[uniquePointer] = arr[i]
		}
	}
	return uniquePointer + 1
}
