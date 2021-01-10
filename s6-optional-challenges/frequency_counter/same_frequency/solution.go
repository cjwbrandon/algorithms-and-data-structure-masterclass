package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(sameFrequency(182, 281))         // true
	fmt.Println(sameFrequency(34, 14))           // false
	fmt.Println(sameFrequency(3589578, 5879385)) // true
	fmt.Println(sameFrequency(22, 222))          // false
}

func sameFrequency(n1, n2 int) bool {
	s1 := strconv.Itoa(n1)
	s2 := strconv.Itoa(n2)

	if len(s1) != len(s2) {
		return false
	}

	lookup := make(map[rune]int)
	for _, l := range s1 {
		count := lookup[l]
		lookup[l] = count + 1
	}

	for _, l := range s2 {
		if val, _ := lookup[l]; val == 0 {
			return false
		}
		lookup[l]--
	}
	return true
}
