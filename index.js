
import {Sumas, Restas} from './clases.js'; // Importamos as clases Sumas e Restas do ficheiro clases.js


//### INSTANCIAS DAS CLASES #####
let instanciaSumas = new Sumas ();// instancia a clases de sumas, mediante a plabra clave new
let instanciaRestas = new Restas(); // instancia a clases de restas, mediante a plabra clave new

//#### metrodos das clases #####
let sumaDousNumeros=instanciaSumas.SumaDousNumeros(2,3); // Asignamos o método sumaDousNumeros á variable sumaDousNumeros
let sumaDeTresNumeros = instanciaSumas.SumaDeTresNumeros(2,3,4); // Asignamos o método sumaDeTresNumeros á variable sumaDeTresNumeros
let restaDousNumeros = instanciaRestas.RestaDousNumeros(2,3); // Asignamos o método restaDousNumeros á variable restaDousNumeros
//#### Saidas por consola #####
console.log(sumaDousNumeros); // Chamamos ao método sumaDousNumeros da instancia suma
console.log(sumaDeTresNumeros); // Chamamos ao método sumaDousNumeros da instancia suma, pero vinculando o contexto á instancia suma