package main

import "fmt"

type usuario struct {
	nome     string
	idade    uint8
	endereco endereco
}

type endereco struct {
	logradouro string
	numero     uint8
}

func main() {
	fmt.Println("Arquivo structs")

	var u usuario
	fmt.Println(u)
	u.nome = "Davi"
	u.idade = 21
	fmt.Println(u)

	enderecoExemplo := endereco{"Rua Qualquer", 244}

	u2 := usuario{"Davi", 21, enderecoExemplo}
	fmt.Println(u2)

	u3 := usuario{nome: "Davi"}
	fmt.Println(u3)
}
