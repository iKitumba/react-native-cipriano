"use strict";
const primeiroArray = [1, "Cipriano", true];
const arrayDeNumeros = [1, 2, 3];
const arrayDeStrings = ["Oi", "Olá", "Mundo"];
/**
 * Pouco aconselhável usar um array com muitos tipos diferentes de dados
 */
const outraFormaDeCriarArray = [];
const arrayDeMultiplosTiposDeDados = [];
arrayDeMultiplosTiposDeDados.push("Cipriano");
arrayDeMultiplosTiposDeDados.push(10);
arrayDeStrings.push("Lorem"); // Colocar um item no final do array
console.log("O meu array de strings tem " + arrayDeStrings.length + " items");
const arrayDePrecos = [10, 20, 200, 1, 5, 30, 21, 4];
// for (let i = 0; i < arrayDePrecos.length; i++) {
//   const itemAtualEmKz = String(arrayDePrecos[i]) + " Kz";
//   console.log(itemAtualEmKz);
// }
// const itensDentroDaMinhaFuncao = arrayDePrecos.length;
// const resultadoDoForEach = arrayDePrecos.forEach(function (item, index) {
//   console.log(`O item ${item} está no índice ${index}`);
//   return index;
// });
// const resultadoDoMap = arrayDePrecos.map(function (item, index) {
//   console.log(`O item ${item} está no índice ${index}`);
//   return item.toFixed(2) + " Kz";
// });
// console.log(resultadoDoMap);
// const resultadoDoFilter = arrayDePrecos.filter(function (item, index) {
//   return item % 2 == 0;
// });
// console.log(resultadoDoFilter);
// const resultadoDoSome = arrayDePrecos.some(function (item, index) {
//   return item == 111;
// });
// console.log(resultadoDoSome);
// const resultadoDoEvery = arrayDePrecos.every(function (item, index) {
//   return item % 2 == 0;
// });
// console.log(resultadoDoEvery);
// console.log(arrayDePrecos.includes(70));
