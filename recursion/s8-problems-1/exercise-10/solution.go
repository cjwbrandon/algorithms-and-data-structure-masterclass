package main

import "fmt"

func main() {
	fmt.Println(power(2, 0))
	fmt.Println(power(2, 2))
	fmt.Println(power(2, 4))
}

func power(base, exp int) int {
	if exp == 0 {
		return 1
	}
	if exp == 1 {
		return base
	}
	return base * power(base, exp-1)
}
