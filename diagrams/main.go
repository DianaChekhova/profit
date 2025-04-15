package main

import "fmt"

func main() {
	s := "Hello, 世界"
	bytes := []byte(s)

	fmt.Printf("Строка: %s\n", s)
	fmt.Printf("Байты (hex): % x\n", bytes) // % x добавляет пробелы между байтами
}
