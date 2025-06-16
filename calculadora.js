export { CalculadoraSenConstructor, CalculadoraConConstructor };
class CalculadoraSenConstructor {
    
  suma(a, b) {
    return a + b;
  }

  resta(a, b) {
    return a - b;
  }

  multiplicacion(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b === 0) {
      return "Erro: non se pode dividir entre 0.";
    }
    return a / b;
  }
}


//  Con constructor
// -------------------------------
class CalculadoraConConstructor {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  suma() {
    return this.a + this.b;
  }

  resta() {
    return this.a - this.b;
  }

  multiplicacion() {
    return this.a * this.b;
  }

  division() {
    if (this.b === 0) {
      return "Erro: non se pode dividir entre 0.";
    }
    return this.a / this.b;
  }
}

