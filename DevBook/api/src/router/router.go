package router

import "github.com/gorilla/mux"

// retorna um router com as rotas configuradas
func Gerar() *mux.Router {
	return mux.NewRouter()
}
