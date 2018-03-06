'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	//Si la palabra termina en "ar", se eliminan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2); //slice corta la palabra, al final le quita 2 letras
	}

	//Si la palabra inicia con "Z", se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	//Si la palabra traducida tiene 10 o mas letras
	//Se debe partir a la mitad y unir con un guion
	length = translation.length;
	if (length >= 10) {
		var firtHalf = translation.slice(0, Math.round(length / 2)); //corta la palabra desde el inicio hasta la mitad
		var secondHalf = translation.slice(Math.round(length / 2)); //comienza desde la mitad y termina hasta el final de la palabra, pero ya no definimos el termino
		translation = firtHalf + '-' + secondHalf;
	}

	//Si la palabra es un palindromo...
	//ninguna regla anterior cuenta y se regresa la palabra...
	//pero intercalando mayusculas y minusculas
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}