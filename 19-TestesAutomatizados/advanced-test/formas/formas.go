package formas

import (
	"fmt"
	"math"
)

type Forma interface {
	area() float64
}

func EscreverArea(f Forma) {
	fmt.Printf("A área da forma é %0.2f\n", f.area())
}

type Retangulo struct {
	Altura  float64
	Largura float64
}

func (r Retangulo) Area() float64 {
	return r.Altura * r.Largura
}

type Circulo struct {
	Raio float64
}

func (c Circulo) Area() float64 {
	return math.Pi * math.Pow(c.Raio, 2)
}
