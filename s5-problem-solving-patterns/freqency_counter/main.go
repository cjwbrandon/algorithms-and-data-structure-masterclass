package main

import "fmt"

func main() {
	fmt.Println(naiveSame([]int{1, 2, 3}, []int{9, 4, 1}))
	fmt.Println(naiveSame([]int{1, 2, 3, 2}, []int{9, 4, 1, 4}))

	fmt.Println(refactoredSame([]int{1, 2, 3}, []int{9, 4, 1}))
	fmt.Println(refactoredSame([]int{1, 2, 3, 2}, []int{9, 4, 1, 4}))
}

func naiveSame(arr1, arr2 []int) bool {
	if len(arr1) != len(arr2) {
		return false
	}

	for _, v1 := range arr1 {
		correctIndex := -1
		for j, v2 := range arr2 {
			if v1*v1 == v2 {
				correctIndex = j
				break
			}
		}
		if correctIndex == -1 {
			return false
		}
		arr2[correctIndex] = arr2[len(arr2)-1]
		arr2 = arr2[:len(arr2)-1]
	}
	return true
}

func refactoredSame(arr1, arr2 []int) bool {
	if len(arr1) != len(arr2) {
		return false
	}

	frequencyCounter1 := make(map[int]int)
	frequencyCounter2 := make(map[int]int)

	for _, val := range arr1 {
		v := frequencyCounter1[val]
		frequencyCounter1[val] = v + 1
	}
	for _, val := range arr2 {
		v := frequencyCounter2[val]
		frequencyCounter2[val] = v + 1
	}

	for key, val := range frequencyCounter1 {
		if _, ok := frequencyCounter2[key*key]; !ok {
			return false
		}
		if frequencyCounter2[key*key] != val {
			return false
		}
	}

	fmt.Println(frequencyCounter1, frequencyCounter2)
	return true
}
