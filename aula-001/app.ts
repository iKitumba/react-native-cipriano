// let nome = "Alberto";
// const idade: number = 20;
// let casado: boolean = false;

// const idadeProximoAno = idade + 1;
// console.log(idadeProximoAno);

/**
 * string, number, boolean, null, undefined, any, void
 */

// let dado: any = "Barcelona";

// dado = 5;

// fetch("https://api.github.com/users/iKitumba")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let livro: string;

// livro = "Meu livro";

// function dizOla(nome: string, idade: number): boolean {
//   console.log("Olá " + nome);

//   if (nome.length > 7) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const eMaior1 = dizOla("Alberto", 10);
// const eMaior2 = dizOla("Cipriano", 14.4);

// console.log(eMaior1, eMaior2);

interface Pessoa {
  nome: string;
}

interface Dados extends Pessoa {
  idade: number;
}

interface InterfaceDoObjeto extends Dados {}

const objeto: InterfaceDoObjeto = {
  nome: "Alberto",
  idade: 10,
};

console.table(objeto);

// https://github.com/ikitumba/react-native-cipriano
