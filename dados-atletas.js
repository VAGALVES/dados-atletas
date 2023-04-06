class Atleta  {

  constructor(nome, idade, peso, altura, notas) {
  this.nome = nome;
  this.idade = idade;
  this.peso = peso;
  this.altura = altura;
  this.notas = notas;
  }
  
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }
  
  calculaIMC() {
    return (this.peso / (this.altura * this.altura)).toFixed(2);
  }
  
  calculaMediaValida() {
    let soma = this.notas.reduce((a,b) => a + b);
    let max = Math.max(...this.notas);
    let min = Math.min(...this.notas);
    return ((soma - max - min) / (this.notas.length - 2)).toFixed(2);
  }
  
  obtemNomeAtleta(){
    return `O nome do(a) atleta é ${this.nome}.`
  };
  
  obtemIdadeAtleta() {
    return `A categoria de ${this.nome} é: ${this.idade} anos`;
  };
  
  obtemPesoAtleta() {
    return `O peso de ${this.nome} é: ${this.peso} kgs`;
  };
  
  obtemNotasAtleta() {
    return `As notas de ${this.nome} são: (${this.notas.join("; ")}).`;
  };
  
  obtemCategoria() {
    return `A categoria de ${this.nome} é: ${this.calculaCategoria()}.`;
  };
  
  obtemIMC() {
    return `O IMC de ${this.nome} é: ${this.calculaIMC()}.`;
  };
  
  obtemMediaValida() {
    return `A média válida de ${this.nome} é: ${this.calculaMediaValida()}.`;
  };
  
}

//objeto
const Atleta1 = new Atleta("Cesar Abascal",30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);

//console.log(Atleta1);
console.log(Atleta1.calculaCategoria());
console.log(Atleta1.calculaIMC());
console.log(Atleta1.calculaMediaValida());
console.log(Atleta1.obtemNomeAtleta());
console.log(Atleta1.obtemIdadeAtleta());
console.log(Atleta1.obtemPesoAtleta());
console.log(Atleta1.obtemNotasAtleta());
console.log(Atleta1.obtemCategoria());
console.log(Atleta1.obtemIMC());
console.log(Atleta1.obtemMediaValida());