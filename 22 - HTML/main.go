package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

var templates *template.Template

type usuario struct {
	Nome  string
	Email string
}

func home(w http.ResponseWriter, r *http.Request) {
	u := usuario{"João", "joao.pedro@gmail.com"}
	templates.ExecuteTemplate(w, "home.html", u)
}

func main() {
	templates = template.Must(template.ParseGlob("*.html"))

	http.HandleFunc("/home", home)

	fmt.Println("Escutando na porta 5001")
	log.Fatal(http.ListenAndServe(":5001", nil))
}
