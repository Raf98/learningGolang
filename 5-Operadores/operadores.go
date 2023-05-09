package main

import "fmt"

func main() {
	soma := 1 + 2
	sub := 1 - 2
	div := 10 / 4
	mult := 10 * 5
	resto := 10 % 2

	fmt.Println(soma, sub, div, mult, resto)

	var numero1 int16 = 10
	var numero2 int32 = 25
	soma2 := numero1 + int16(numero2)
	fmt.Println(soma2)

	var variavel1 string = "String"
	variavel2 := "String2"
	fmt.Println(variavel1, variavel2)

	fmt.Println(1 > 2)
	fmt.Println(1 >= 2)
	fmt.Println(1 == 2)
	fmt.Println(1 < 2)
	fmt.Println(1 <= 2)
	fmt.Println(1 != 2)

	verdadeiro, falso := true, false
	fmt.Println("-----------------")
	fmt.Println(verdadeiro && falso)
	fmt.Println(verdadeiro || falso)
	fmt.Println(!verdadeiro)

	numero := 10
	numero++
	fmt.Println(numero)
	numero += 15
	fmt.Println(numero)

	numero--
	numero -= 20

	numero *= 3
	numero /= 10
	numero %= 3

	fmt.Println(numero)
}
