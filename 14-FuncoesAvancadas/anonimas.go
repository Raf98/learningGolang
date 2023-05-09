package main

import "fmt"

func main() {

	func(texto string) {
		fmt.Println(texto)
	}("Olá Mundo!")

	retorno := func(texto string) string {
		return fmt.Sprintf("Recebido -> %s %d", texto, 10)
	}("Olá Mundo!")

	fmt.Println(retorno)

}
