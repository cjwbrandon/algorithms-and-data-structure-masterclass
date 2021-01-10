package main

import "fmt"

func main() {
	fmt.Println(validAnagram("", ""))               // true
	fmt.Println(validAnagram("aaz", "zza"))         // false
	fmt.Println(validAnagram("rat", "car"))         // false
	fmt.Println(validAnagram("anagram", "nagaram")) // true
	fmt.Println(validAnagram("awesome", "awesom"))  // false
	fmt.Println(validAnagram("qwerty", "qeywrt"))   // true
}

func validAnagram(w1, w2 string) bool {
	if len(w1) != len(w2) {
		return false
	}

	lookup := make(map[rune]int)

	for _, l := range w1 {
		count := lookup[l]
		lookup[l] = count + 1
	}

	for _, l := range w2 {
		if count, _ := lookup[l]; count == 0 {
			return false
		}
		lookup[l]--
	}
	return true
}
