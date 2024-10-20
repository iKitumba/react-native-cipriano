"use strict";
// const Usuario = {
//   id: 1,
//   nome: "Cipriano",
//   idade: 19,
//   email: "cipriano@user.com",
//   endereco: {
//     rua: "Kimbombo",
//     numeroDaCasa: 128,
//   },
// };
// const idadeDoUsuario = Usuario.idade;
// const emailDoUsuario = Usuario.email;
// const nomeDoUsuario = Usuario.nome;
// console.log(idadeDoUsuario);
// console.log(emailDoUsuario);
// console.log(nomeDoUsuario);
/**
 * Desestruturação de objectos
 */
// const {
//   email,
//   idade: idadeDoUsuarioRenomeado,
//   endereco: { numeroDaCasa: nCasa },
// } = Usuario;
// console.log(email);
// console.log(idadeDoUsuarioRenomeado);
// console.log(nCasa);
/**
 * Desestruturação de array
 */
// const matriz = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
// ];
// const numeroDosJogadoresDentroDeCampo = matriz[0];
// const numeroDoGuardaRedesDentroDeCampo = numeroDosJogadoresDentroDeCampo[0];
// const numeroDosJogadoresForaDeCampo = matriz[1];
// console.log(numeroDosJogadoresDentroDeCampo);
// console.log(numeroDosJogadoresForaDeCampo);
// console.log(numeroDoGuardaRedesDentroDeCampo);
// if (matriz.length == 2) {
//   const [, numeroDosJogadoresForaDeCampo] = matriz;
//   console.log(numeroDosJogadoresForaDeCampo);
// } else {
//   console.log("Impossível desestruturar");
// }
// const numeroDosAlunosDaSala14 = [1, 2, 3, 4, 6, 7, 10, 11, 13, 22];
// const [primeiroAluno, ...restoDosAlunos] = numeroDosAlunosDaSala14;
// console.log(primeiroAluno, restoDosAlunos);
function somaTodosOsNumeros(...numerosDigitados) {
    const total = numerosDigitados.reduce((valorAnterior, valorAtual, index) => {
        return valorAnterior + valorAtual;
    }, 0);
    console.log(total);
}
somaTodosOsNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9);
