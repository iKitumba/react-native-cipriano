export class Pessoa {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mostrarMeusDados() {
    console.log(`${this.nome} tem ${this.idade} anos de idade`);
  }

  minhaOutrafun = () => {
    this.idade;
  };
}
