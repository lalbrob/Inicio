import { CalculadoraConConstructor, CalculadoraSenConstructor } from "./calculadora.js";   
const calc1 = new CalculadoraSenConstructor();
console.log("Sen constructor:");
console.log("Suma:", calc1.suma(10, 5));
console.log("Resta:", calc1.resta(10, 5));
console.log("Multiplicación:", calc1.multiplicacion(10, 5));
console.log("División:", calc1.division(10, 5));
console.log("División por 0:", calc1.division(10, 0));

const calc2 = new CalculadoraConConstructor(20, 4);
console.log("Con constructor:");
console.log("Suma:", calc2.suma());
console.log("Resta:", calc2.resta());
console.log("Multiplicación:", calc2.multiplicacion());
console.log("División:", calc2.division());