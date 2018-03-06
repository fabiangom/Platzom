const expect = require('chai').expect
const platzom = require('..').platzom

describe('#platzom', function() {
	it('Si la palabra termina con "ar", se le quitan esas dos letras', function() {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})
	it('Si la palabra inicia con "z", se le añade "pe" al final.', function() {
		const translation = platzom("Zorro")
		expect(translation).to.equal("Zorrope")
	})
	it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio.', function() {
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	it('Si la palabra es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas.', function() {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})