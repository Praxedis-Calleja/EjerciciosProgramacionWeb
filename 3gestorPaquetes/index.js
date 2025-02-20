
//Libreria nombres raros
var generateName = require('sillyname');

//Libreria superheroes
const superheroes = require('superheroes');

//Generar nombre raro
var sillyName = generateName();
console.log('Nombre aleatorio: '+sillyName);



//Generar superheroe
var superheroe = superheroes.randomSuperhero();
console.log('Nombre del superheroe: ' + superheroe);
