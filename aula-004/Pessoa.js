"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade) {
        this.minhaOutrafun = () => {
            this.idade;
        };
        this.nome = nome;
        this.idade = idade;
    }
    mostrarMeusDados() {
        console.log(`${this.nome} tem ${this.idade} anos de idade`);
    }
}
exports.Pessoa = Pessoa;
