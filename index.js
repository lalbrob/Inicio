/*
*Palabras clave:
*class
*new -> Serve para solicitar a instancia dunha clase
*/

class Sumas{

    sumaDousNumeros(a,b){
        return a+b; 
    }
}
class Restas{
    restaDousNumeros(a,b){
        return a-b;
    }
    import {Sumas,Restas} from './clases.js'; 
//### INSTANCIAS DAS CLASES #####
let instanciaSumas = new Sumas ();// instancia a clases de sumas, mediante a plabra clave new
let instanciaRestas = new Restas(); // instancia a clases de restas, mediante a plabra clave new

//#### metrodos das clases #####
let sumaDousNumeros=instanciaSumas.sumaDousNumeros(2,3); // Asignamos o método sumaDousNumeros á variable sumaDousNumeros
let sumaDeTresNumeros = instanciaSumas.sumaDeTresNumeros(2,3,4);
let restaDousNumeros = instanciaRestas.restaDousNumeros(2,3); // Asignamos o método restaDousNumeros á variable restaDousNumeros
//#### Saidas por consola #####
console.log(sumaDousNumeros(2,3)); // Chamamos ao método sumaDousNumeros da instancia suma
console.log(sumaDeTresNumeros(2,3,4)); // Chamamos ao método sumaDousNumeros da instancia suma, pero vinculando o contexto á instancia suma