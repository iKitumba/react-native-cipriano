import { Pessoa } from "./Pessoa.js";

type MinhaTipagemDoObjetoCores = {
  branca: string;
  preta: string;
  vermelha: string;
  pintarVermelho: () => void;
  pintar: (cor: string) => string;
};

interface MinhaInterfaceDoObjetoCores {
  branca: string;
  preta: string;
  vermelha: string;
  pintarVermelho: () => void;
  pintar: (cor: string) => string;
}

const meuObjetoDeCores: MinhaInterfaceDoObjetoCores = {
  branca: "#ffffff",
  preta: "#000000",
  vermelha: "#ff0000",

  pintarVermelho: function () {
    console.log("Pintou com a cor " + this.vermelha);
  },

  pintar(cor: string) {
    console.log("Pintou com a cor " + cor);

    return cor;
  },
};

const maiUmObj = { ...meuObjetoDeCores };
const cipriano = new Pessoa("Cipriano", 19);
cipriano.mostrarMeusDados();

console.log(cipriano);
