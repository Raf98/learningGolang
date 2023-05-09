package main

import (
	"fmt"
	"introducao-testes/enderecos"
)

func main() {
	tipoDeEndereco := enderecos.TipoDeEndereco("Avenida Paulista")
	fmt.Println(tipoDeEndereco)
	tipoDeEndereco = enderecos.TipoDeEndereco("Rodovia dos Imigrantes")
	fmt.Println(tipoDeEndereco)
	tipoDeEndereco = enderecos.TipoDeEndereco("Praça das Rosas")
	fmt.Println(tipoDeEndereco)
}
