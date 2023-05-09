package enderecos

import "strings"

func checarTipoValido(tiposValidos []string, primeiraPalavraDoEndereco string) bool {
	for _, tipo := range tiposValidos {
		if tipo == primeiraPalavraDoEndereco {
			return true
		}
	}

	return false
}

// TipoDeEndereco verifica se um endereço tem um tipo válido e o retorna
func TipoDeEndereco(endereco string) string {
	tiposValidos := []string{"rua", "avenida", "estrada", "rodovia"}

	enderecoEmLetraMinuscula := strings.ToLower(endereco)
	primeiraPalavraDoEndereco := strings.Split(enderecoEmLetraMinuscula, " ")[0]

	if enderecoTemUmTipoValido := checarTipoValido(tiposValidos, primeiraPalavraDoEndereco); enderecoTemUmTipoValido {
		return strings.Title(primeiraPalavraDoEndereco)
	}

	return "Tipo Inválido"
}
