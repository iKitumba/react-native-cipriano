"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_js_1 = require("./Pessoa.js");
const meuObjetoDeCores = {
    branca: "#ffffff",
    preta: "#000000",
    vermelha: "#ff0000",
    pintarVermelho: function () {
        console.log("Pintou com a cor " + this.vermelha);
    },
    pintar(cor) {
        console.log("Pintou com a cor " + cor);
        return cor;
    },
};
const maiUmObj = Object.assign({}, meuObjetoDeCores);
const cipriano = new Pessoa_js_1.Pessoa("Cipriano", 19);
cipriano.mostrarMeusDados();
console.log(cipriano);
