package main

import "fmt"

func main() {
	fmt.Println(reverse("awesome"))
}

func reverse(s string) string {
	if len(s) == 1 {
		return s
	}
	return string(s[len(s)-1]) + reverse(s[:len(s)-1])
}
