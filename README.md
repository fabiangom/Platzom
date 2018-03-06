# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JS](https://platzi.com/js) de [Platzi](https://platzi.com/js)

## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra inicia con "z", se le añade "pe" al final.
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio.
- Si la palabra es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas.

## Instalacion

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'
platzom("Programar") //Program
platzom("Zorro") //Zorrope
platzom("Zarpar") //Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos") //SoMeTeMoS
```

## Creditos

- [Fabian Gomez](https://twitter.com/JaredGomez123)

## Licencia

[MIT](https://opensource.org/licenses/MIT)