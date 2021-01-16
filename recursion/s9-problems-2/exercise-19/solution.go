package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(capitalizeFirst([]string{"car", "taco", "banana"}))
}

func capitalizeFirst(arr []string) []string {
	word := arr[0]
	word = strings.ToUpper(string(word[0])) + string(word[1:])
	if len(arr) == 1 {
		return []string{word}
	}
	return append([]string{word}, capitalizeFirst(arr[1:])...)
}
